import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_ACCOUNT,
    pass: process.env.GMAIL_APP_PASSWORD
  }
})

interface EmailData {
  to: string;
  subject: string;
  message: string;
  cc?: string;
}

class EmailService {
  private sender: string;

  constructor(sender?: string) {
    if (!process.env.GMAIL_ACCOUNT) throw new Error("GMAIL_ACCOUNT was not provided and is required by EmailService");
    this.sender = sender || process.env.GMAIL_ACCOUNT;
  }

  async sendEmail({ to, subject, message, cc }: EmailData) {
    const text = `${message}`;

    const { accepted } = await transporter.sendMail({
      from: this.sender,
      to,
      subject,
      text,
      cc
    })

    const isAccepted = accepted && accepted.length > 0 && accepted.includes(to);

    if (!isAccepted) throw new Error(`email not accepted: ${accepted}`);

    return isAccepted;
  }
}

const emailService = new EmailService();

export default emailService;

