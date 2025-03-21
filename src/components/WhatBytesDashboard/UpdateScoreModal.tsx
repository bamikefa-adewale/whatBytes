"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UpdateScoreSchema,
  updateScoreSchema,
} from "@/lib/schema/UpdateSchema";
import toast from "react-hot-toast";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { inputFields } from "../../constants/inputFields";
import { useEffect } from "react";
import { useScore } from "@/app/contexts/hooks/useScore";
import { CustomButton } from "../ui/CustomButton";
import { CustomInput } from "../ui/CustomInput";

interface UpdateScoreModalProps {
  open: boolean;
  onClose: (open: boolean) => void;
}

export const UpdateScoreModal: React.FC<UpdateScoreModalProps> = ({
  open,
  onClose,
}) => {
  const { scores, updateScores } = useScore();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<UpdateScoreSchema>({
    resolver: zodResolver(updateScoreSchema),
    defaultValues: {
      rank: 0,
      percentile: 0,
      currentScore: 0,
    },
  });

  useEffect(() => {
    if (scores) {
      setValue("rank", scores.rank);
      setValue("currentScore", scores.currentScore);
      setValue("percentile", scores.percentile);
    }
  }, [setValue, scores]);
  const HtmlLogo =
    "https://res.cloudinary.com/dbrub0d6r/image/upload/v1742488254/html5_xenq6g.png";

  const onSubmit = (data: UpdateScoreSchema) => {
    updateScores(data);
    toast.success("Score updated successfully!");
    onClose(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="  p-6 w-[43%]  ">
        {" "}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 w-full">
          <div className="flex justify-between my-8">
            <DialogTitle className="text-2xl font-bold mb-4">
              Update Scores
            </DialogTitle>
            <Image
              src={HtmlLogo}
              alt="HTML5 Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>

          <div className="space-y-4">
            {/* Rank Input */}
            {inputFields.map(({ id, label, name, placeholder }) => (
              <div key={id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm">
                    {id}
                  </div>
                  <div className="flex-1 text-2xl my-3">
                    Update your <span className="font-semibold">{label}</span>
                  </div>
                </div>
                <div className="w-80">
                  <CustomInput
                    name={name}
                    register={register}
                    error={errors[name]?.message}
                    placeholder={placeholder}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <CustomButton
              onClick={() => onClose(false)}
              type="button"
              className="border-2 border-blue-500  bg-white text-blue-600 hover:text-gray-500"
            >
              Cancel
            </CustomButton>
            <CustomButton
              type="submit"
              className=" bg-blue-900  hover:bg-gray-400 text-white border-2 border-black flex items-center gap-2 text-xl"
            >
              save <MoveRight className="size-4" />
            </CustomButton>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
