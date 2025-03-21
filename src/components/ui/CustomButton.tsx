import { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`px-2 md:px-5 py-2 lg:py-3 rounded-md font-medium transition-all 
       bg-blue-900   border-2 border-black
        cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};
