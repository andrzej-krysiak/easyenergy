import { NextResponse } from 'next/server';
import { contactFormSchema } from '../../../components/ValidationSchema';
import { Resend } from 'resend';
import { renderAdminContactEmail } from '../../emails/adminContactEmail';
import { renderUserContactEmail } from '../../emails/userContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Walidacja danych przy pomocy tego samego schematu Zod co na frontendzie
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      const errorMessage = result.error.issues[0]?.message || 'Nieprawidłowe dane formularza.';
      return NextResponse.json(
        { error: errorMessage },
        { status: 400 }
      );
    }

    const { companyName, phone, email, message } = result.data;

    // Wysyłanie emaila do administratora (Ciebie)
    const adminEmailData = await resend.emails.send({
      from: 'Kontakt <onboarding@resend.dev>', // Zmień na swoją zweryfikowaną domenę na produkcji
      to: [adminEmail!],
      subject: `Nowe zapytanie od: ${companyName}`,
      html: renderAdminContactEmail({ companyName, phone, email, message }),
    });

    if (adminEmailData.error) {
      console.error("Błąd wysyłania do admina:", adminEmailData.error);
      return NextResponse.json({ error: 'Nie udało się wysłać wiadomości do administratora.' }, { status: 500 });
    }

    // Wysyłanie emaila z podziękowaniem do użytkownika
    const userEmailData = await resend.emails.send({
      from: 'EasyEnergy <onboarding@resend.dev>', // Zmień na swoją zweryfikowaną domenę na produkcji
      to: [email],
      subject: `Dziękujemy za kontakt z EasyEnergy`,
      html: renderUserContactEmail({ companyName, message }),
    });

    if (userEmailData.error) {
      console.error("Błąd wysyłania do klienta:", userEmailData.error);
      // Nie przerywamy wykonania, bo admin już dostał maila, ale logujemy błąd
    }

    return NextResponse.json(
      { message: 'Wiadomości zostały wysłane pomyślnie!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Błąd podczas przetwarzania formularza:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas wysyłania wiadomości.' },
      { status: 500 }
    );
  }
}
