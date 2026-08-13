import { Resend } from "resend";
import { contactSchema } from "#shared/schemas/contact";

const rateLimitMap = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 3;

export default defineEventHandler(async (event) => {
  const ip = getRequestIP(event, { xForwardedFor: true }) ?? "unknown";
  const now = Date.now();
  const recent = (rateLimitMap.get(ip) ?? []).filter(
    (t) => now - t < WINDOW_MS
  );

  if (recent.length >= MAX_REQUESTS) {
    throw createError({
      statusCode: 429,
      statusMessage: "Too many requests. Try again later.",
    });
  }

  const body = await readBody(event);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: parsed.error.issues[0]?.message ?? "Invalid input",
    });
  }

  if (parsed.data.website) {
    return { success: true };
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);

  const config = useRuntimeConfig();
  const resend = new Resend(config.resendApiKey);

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: config.contactEmail,
    replyTo: parsed.data.email,
    subject: `New message from ${parsed.data.name}`,
    text: parsed.data.message,
  });

  if (error) {
    throw createError({
      statusCode: 502,
      statusMessage: "Failed to send. Please try again.",
    });
  }

  return { success: true };
});
