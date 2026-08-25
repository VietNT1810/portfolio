import { reactive, ref } from "vue";
import {
  contactSchema,
  type ContactFieldErrors,
  type ContactFormData,
} from "#shared/schemas/contact";

export function useContactForm() {
  const form = reactive<ContactFormData>({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const status = ref<"idle" | "loading" | "success" | "error">("idle");
  const errorMessage = ref("");
  const fieldErrors = ref<ContactFieldErrors>({});

  // validate a single field — used on blur for immediate feedback
  function validateField(field: keyof ContactFormData) {
    const result = contactSchema.shape[field].safeParse(form[field]);
    if (!result.success) {
      fieldErrors.value[field] = result.error.issues[0]?.message;
    } else {
      delete fieldErrors.value[field];
    }
  }

  // validate everything — used on submit
  function validateAll(): boolean {
    const result = contactSchema.safeParse(form);
    fieldErrors.value = {};

    if (!result.success) {
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactFormData;
        // keep the first error per field
        if (!fieldErrors.value[key]) {
          fieldErrors.value[key] = issue.message;
        }
      }
      return false;
    }

    return true;
  }

  function reset() {
    form.name = "";
    form.email = "";
    form.message = "";
    form.website = "";
    status.value = "idle";
    errorMessage.value = "";
    fieldErrors.value = {};
  }

  async function submit() {
    if (status.value === "loading") return;

    errorMessage.value = "";

    if (!validateAll()) {
      // don't call the API if client-side validation fails
      return;
    }

    status.value = "loading";

    try {
      await $fetch("/api/contact", {
        method: "POST",
        body: form,
      });
      status.value = "success";
      form.name = "";
      form.email = "";
      form.message = "";
    } catch (err: any) {
      status.value = "error";
      errorMessage.value =
        err?.data?.statusMessage ?? "Something went wrong. Please try again.";
    }
  }

  return {
    form,
    status,
    errorMessage,
    fieldErrors,
    validateField,
    submit,
    reset,
  };
}
