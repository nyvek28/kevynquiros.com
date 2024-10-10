import clsx from "clsx";

interface InputProps {
  label: string;
  className?: string;
  type?: "text" | "email" | "password" | "textarea";
}

export default function Input({ className, label, type = "text" }: InputProps) {
  return (
    <div className={clsx("relative w-full", className)}>
      <label className="absolute text-[10px] opacity-50 top-1 left-2">{label}</label>
      {type === "textarea" ? (
        <textarea
          className="p-2 pt-5 placeholder:text-xxs placeholder:top-0 placeholder:opacity-0 rounded-[5px] w-full h-52 bg-tertiary-bg"
          placeholder={label}
        />
      ) : (
        <input
          className="p-2 pt-5 placeholder:text-xxs placeholder:top-0 placeholder:opacity-0 rounded-[5px] w-full bg-tertiary-bg"
          type={type}
          placeholder={label}
        />
      )}
      
    </div>
  )
}