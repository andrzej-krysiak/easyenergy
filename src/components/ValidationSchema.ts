import { z } from 'zod';

export const contactFormSchema = z.object({
  companyName: z.string().min(1, "Nazwa firmy jest wymagana"),
  phone: z.string()
    .min(1, "Numer telefonu jest wymagany")
    .regex(/^(\+?[\d\s\-()]{7,15})$/, "Niepoprawny format numeru"),
  email: z.string().min(1, "Email jest wymagany").email("Niepoprawny format email"),
  message: z.string().min(1, "Wiadomość jest wymagana"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
