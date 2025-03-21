import { UpdateScoreSchema } from "@/lib/schema/UpdateSchema";
import { InputHTMLAttributes } from "react";
import { Path, UseFormRegister } from "react-hook-form";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<UpdateScoreSchema>;
  register: UseFormRegister<UpdateScoreSchema>;
  error?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  name,
  register,
  error,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        type="number"
        {...register(name)}
        {...props}
        className={`border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
