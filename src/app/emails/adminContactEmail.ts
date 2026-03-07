interface AdminEmailProps {
  companyName: string;
  phone: string;
  email: string;
  message: string;
}

export const renderAdminContactEmail = ({ companyName, phone, email, message }: AdminEmailProps) => {
  return `
    <div style="font-family: sans-serif; color: #333; max-w-[600px]; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
      <h2 style="color: #3385d9; margin-bottom: 20px;">Nowe zapytanie z formularza kontaktowego</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; width: 120px;"><strong>Firma:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${companyName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Telefon:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #3385d9;">${email}</a></td>
        </tr>
      </table>
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #3385d9;">
        <h3 style="margin-top: 0; color: #475569; font-size: 16px;">Wiadomość:</h3>
        <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
      </div>
    </div>
  `;
};
