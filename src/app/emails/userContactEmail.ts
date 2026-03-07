interface UserEmailProps {
  companyName: string;
  message: string;
}

export const renderUserContactEmail = ({ companyName, message }: UserEmailProps) => {
  return `
    <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #f1f5f9; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
      <div style="text-align: center; margin-bottom: 30px;">
        <img src="https://easyenergy.pl/wp-content/uploads/2023/03/cropped-logo-transparent.png" alt="EasyEnergy Logo" style="max-height: 40px; width: auto; margin: 0 auto; display: block;" />
      </div>
      
      <h2 style="color: #1e293b; font-size: 20px;">Dzień dobry!</h2>
      <p style="line-height: 1.6; color: #475569;">Dziękujemy za przesłanie zapytania. Otrzymaliśmy Twoją wiadomość pomyślnie.</p>
      <p style="line-height: 1.6; color: #475569;">Nasz doradca zapozna się z Twoją sprawą i skontaktuje się z Tobą najszybciej jak to możliwe (zazwyczaj w ciągu 24 godzin roboczych).</p>
      
      <div style="margin-top: 30px; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
        <p style="margin-top: 0; color: #1e293b;"><strong>Szczegóły Twojego zapytania:</strong></p>
        <p style="margin-bottom: 5px; color: #475569;"><em>Firma:</em> ${companyName}</p>
        <p style="margin-bottom: 5px; color: #475569;"><em>Wiadomość:</em></p>
        <p style="margin-top: 5px; line-height: 1.5; color: #475569;">${message.replace(/\n/g, '<br>')}</p>
      </div>
      
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
        <p style="margin: 0;">Z pozdrowieniami,</p>
        <p style="margin: 5px 0 0 0; color: #3385d9; font-weight: bold;">Zespół EasyEnergy</p>
      </div>
    </div>
  `;
};
