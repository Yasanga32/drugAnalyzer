import { Resend } from "resend";
import { VerifyEmailTemplate } from "@/components/EmailTemplates/verify-email";
import { ResetPasswordTemplate } from "@/components/EmailTemplates/reset-email";

const resend = new Resend(process.env.RESEND_KEY);

export async function sendVerificationEmail(
  email: string,
  firstName: string,
  verificationUrl: string,
) {
  try {
    const { data, error } = await resend.emails.send({
      from: "ProteinBind <onboarding@resend.dev>",
      to: [email],
      subject: "Verify your email",
      react: VerifyEmailTemplate({ firstName, verificationUrl }),
    });

    if (error) {
      throw new Error(JSON.stringify(error));
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message || "Failed to send verification email");
  }
}

export async function sendResetPasswordEmail(
  email: string,
  firstName: string,
  resetUrl: string,
) {
  try {
    const { data, error } = await resend.emails.send({
      from: "ProteinBind <support@resend.dev>",
      to: [email],
      subject: "Reset your password",
      react: ResetPasswordTemplate({ firstName, resetUrl }),
    });

    if (error) {
      throw new Error(JSON.stringify(error));
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message || "Failed to send reset password email");
  }
}