import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo.")
    .max(100, "Nome muito longo."),
  email: z.email("Informe um e-mail válido."),
  phone: z
    .string()
    .trim()
    .min(8, "Informe um telefone válido.")
    .max(20, "Telefone muito longo."),
  message: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais (mín. 10 caracteres).")
    .max(1000, "Mensagem muito longa."),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
