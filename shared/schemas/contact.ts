import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name is too long"),
  email: z.email("Enter a valid email").min(1, "Email is required"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
  website: z.string().max(0).optional(), // honeypot
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type ContactFieldErrors = Partial<Record<keyof ContactFormData, string>>;
