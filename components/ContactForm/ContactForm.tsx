'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { useCallback } from "react"
import clsx from "clsx"

interface ContactFormSchema {
  name: string
  email: string
  message: string
}

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const { register, handleSubmit } = useForm<ContactFormSchema>()
  const onSubmit: SubmitHandler<ContactFormSchema> = useCallback((data: ContactFormSchema) => {
    console.log(data)
  }, [])

  const labelClasses = "text-secondary-text"
  const inputClasses = "w-full p-2 rounded-md mb-4"

  return (
    <div className={clsx("w-full text-primary-text", className)}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div>
          <label className={labelClasses} htmlFor="name">Name</label>
          <input className={inputClasses} type="text" {...register("name")} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="email">Email</label>
          <input className={inputClasses} type="email" {...register("email")} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="message">Message</label>
          <textarea className={inputClasses} {...register("message")} />
        </div>
        <button type="submit" className="mt-2 rounded-md bg-secondary-bg text-secondary-text py-1 px-2">Submit</button>
      </form>
    </div>
  )
}