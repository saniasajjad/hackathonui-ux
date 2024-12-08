import React from "react";
import { ChevronDown, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: boolean;
  placeholder: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  iconClassName?: string;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      type = "text",
      placeholder,
      label,
      icon,
      containerClassName,
      labelClassName,
      inputClassName,
      iconClassName,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className={cn("relative", containerClassName)}>
        <label
          className={cn(
            "block text-base text-secondary-dark-500 font-semibold pb-2",
            labelClassName
          )}
          htmlFor={inputId}
        >
          {label}
        </label>
        <div className="relative">
          {icon && (
            <ChevronDown
              className={cn(
                "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400",
                iconClassName
              )}
              aria-hidden="true"
            />
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "w-full rounded-xl bg-brandBg  py-4 px-4 font-medium text-base placeholder:text-secondary-dark-300 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-primary",
              icon && "pr-10",
              inputClassName
            )}
            type={type}
            placeholder={placeholder}
            {...props}
          />
        </div>
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
