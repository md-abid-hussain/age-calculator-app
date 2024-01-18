import { FieldErrors, UseFormRegister } from "react-hook-form";
import { DateSchema } from "../App";

type CustomInputProps = {
  labelName: string;
  id: string;
  name: "day" | "month" | "year";
  register: UseFormRegister<DateSchema>;
  errors: FieldErrors<DateSchema>;
};

const CustomInput = ({
  labelName,
  id,
  name,
  register,
  errors,
}: CustomInputProps) => {
  let labelClass = errors[name] ? "text-lightRed" : "text-smokeGray";
  labelClass = labelClass + " text-xs text tracking-widest font-bold lg:text-sm";

  let inputClass = errors[name]
    ? "focus:border-lightRed border-lightRed"
    : "focus:border-customPurple border-offWhite";
  inputClass =
    inputClass +
    " w-[86px] border-2 rounded-md py-4 px-3.5 text-sm focus:outline-none focus:ring-[0.5px] text-lg font-black lg:w-[160px] lg:p-[22px] text-[28px]";
  return (
    <div className="flex flex-col gap-2 relative mb-8">
      <label htmlFor="day" className={labelClass}>
        {labelName}
      </label>
      <input type="number" id={id} {...register(name)} className={inputClass} />
      {errors[name] && (
        <p className="text-xs text-lightRed italic absolute -bottom-8 lg:text-sm">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default CustomInput;