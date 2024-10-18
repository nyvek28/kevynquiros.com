"use server";

import emailService from "@/services/email";

interface EmailFormData {
  email: string;
  name: string;
  message: string;
}

interface Response {
  status: number;
  message: string;
  errors?: any;
}

function createResponse<T>(status: number, message: string, errors?: Partial<Record<keyof T, string>>): Response {
  return {
    status,
    message,
    errors
  }
}

function mapFormData(formData: any) {
  return Object.fromEntries(formData);
}

function verifyIsEmailValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateFields(name: string, email: string, message: string) {
  const errors: Partial<Record<keyof EmailFormData, string>> = {};

  const hasName = name && name.length > 0;
  if (!hasName) errors.name = "Name is required";
  
  const hasEmail = email && email.length > 0;
  if (!hasEmail) errors.email = "Email is required"
  else if (!verifyIsEmailValid(email)) errors.email = "Email is invalid";

  const hasMessage = message && message.length > 0;
  if (!hasMessage) errors.message = "Message is required";

  return errors;
}

export async function submitContactForm(prevState: any, formData: any) {
  const { email, name, message } = mapFormData(formData);
  const errors = validateFields(name, email, message);

  if (Object.keys(errors).length > 0) {
    console.error("Invalid form data", errors);
    return createResponse<EmailFormData>(400, "Invalid form data", errors);
  }

  try {
    const subject = `Message from ${name}`;
    await emailService.sendEmail({
      cc: email,
      message,
      subject,
      to: process.env.GMAIL_ACCOUNT || ""
    });
    return createResponse<EmailFormData>(200, "Email sent successfully");
  } catch(error) {
    console.error("Error sending email", error);
    return createResponse<EmailFormData>(500, "Error sending email");
  }
}