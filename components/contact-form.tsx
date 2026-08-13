"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { submitContactForm } from "@/actions/submit-contact-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactFormInput } from "@/types/contact-schema";

type SubmitStatus =
  | { state: "idle" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>({ state: "idle" });

  const form = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function handleSubmit(values: ContactFormInput) {
    setStatus({ state: "idle" });

    const result = await submitContactForm(values);

    if (!result.success) {
      if (result.errors) {
        for (const [field, messages] of Object.entries(result.errors)) {
          form.setError(field as keyof ContactFormInput, {
            message: messages[0],
          });
        }
      }

      setStatus({
        state: "error",
        message: result.message ?? "Não foi possível enviar sua mensagem.",
      });
      return;
    }

    setStatus({
      state: "success",
      message: result.message ?? "Mensagem enviada com sucesso!",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-5"
        noValidate
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="voce@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(11) 90000-0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Conte um pouco sobre o que seu pet precisa"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {status.state !== "idle" && (
          <p
            role="status"
            className={
              status.state === "success"
                ? "text-sm font-medium text-emerald-600 dark:text-emerald-400"
                : "text-sm font-medium text-red-600 dark:text-red-400"
            }
          >
            {status.message}
          </p>
        )}

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Enviando..." : "Enviar mensagem"}
        </Button>
      </form>
    </Form>
  );
}
