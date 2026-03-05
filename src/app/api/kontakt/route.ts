import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, phone, email, message } = body;

    // Basic server-side validation
    if (!companyName || !phone || !email || !message) {
      return NextResponse.json(
        { error: 'Wszystkie pola są wymagane.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Niepoprawny format adresu email.' },
        { status: 400 }
      );
    }

    // In a real application, you would send an email or save to a database here.
    // For now, we'll just log the data and return a success response.
    console.log('Otrzymano zgłoszenie kontaktowe:', {
      companyName,
      phone,
      email,
      message,
    });

    // Simulate some processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Wiadomość została wysłana pomyślnie!' },
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
