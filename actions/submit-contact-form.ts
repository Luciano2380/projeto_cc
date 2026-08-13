"use server";

import { contactFormSchema, type ContactFormInput } from "@/types/contact-schema";

export type SubmitContactFormResult = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  input: ContactFormInput,
): Promise<SubmitContactFormResult> {
  const validation = contactFormSchema.safeParse(input);

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
    };
  }

  // TODO: integrar com provedor de e-mail/CRM quando disponível.
  console.log("Novo contato recebido:", validation.data);

  return {
    success: true,
    message: "Mensagem enviada! Em breve entraremos em contato.",
  };
}
