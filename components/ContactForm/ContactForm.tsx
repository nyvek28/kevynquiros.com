"use client";
import { useFormState } from "react-dom";
import { Section } from "@/components/Section"
import { Input } from "@/components/Input"
import { submitContactForm } from "@/app/actions";
import { Submit } from "./Submit";

const initialState = {
  status: 0,
  message: "",
  errors: null
}

export const ContactForm = () => {
  const [state, formAction] = useFormState(submitContactForm, initialState)
  const isSubmitted = state?.status === 200;

  return (
    <Section id="contact" className="col-span-full md:col-span-6 md:col-start-6 mb-10">
      <h2 className="mb-7">Let's Talk</h2>
      <form className="flex flex-col" action={formAction}>
        <Input
          label="Name"
          name="name"
          className="mb-6"
          error={state?.errors?.name}
          disabled={isSubmitted}
        />
        <Input
          label="Email"
          name="email"
          className="mb-6"
          error={state?.errors?.email}
          disabled={isSubmitted}
        />
        <Input
          label="Message"
          name="message"
          type="textarea"
          className="mb-6"
          error={state?.errors?.message}
          disabled={isSubmitted}
        />
        <Submit isSubmitted={isSubmitted} />
      </form>
    </Section>
  )
}

export default ContactForm;