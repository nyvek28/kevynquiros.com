import clsx from "clsx";

interface InputProps {
  label: string;
  className?: string;
  type?: "text" | "email" | "password" | "textarea";
  name: string;
  error?: string;
  disabled?: boolean;
}

export default function Input({ className, label, type = "text", name, error, disabled }: InputProps) {
  return (
    <div className={clsx("relative w-full", className)}>
      <label className="absolute text-[10px] opacity-50 top-1 left-2">{label}</label>
      {type === "textarea" ? (
        <textarea
          className="p-2 pt-5 placeholder:text-xxs placeholder:top-0 placeholder:opacity-0 rounded-[5px] w-full h-52 bg-tertiary-bg"
          placeholder={label}
          name={name}
          disabled={disabled}
        />
      ) : (
        <input
          className="p-2 pt-5 placeholder:text-xxs placeholder:top-0 placeholder:opacity-0 rounded-[5px] w-full bg-tertiary-bg"
          type={type}
          placeholder={label}
          name={name}
          disabled={disabled}
        />
      )}
      {error && <span className="text-error-text text-[10px] absolute -bottom-4 left-2">{error}</span>}
    </div>
  )
}