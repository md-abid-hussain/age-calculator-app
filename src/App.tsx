import buttonIcon from "./assets/images/icon-arrow.svg";
import CustomInput from "./components/CustomInput";
import dateSchema from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

export type DateSchema = {
  day: number;
  month: number;
  year: number;
};

const App = () => {
  const [totalDay, setTotalDay] = useState("");
  const [totalMonth, setTotalMonth] = useState("");
  const [totalYear, setTotalYear] = useState("");
  const { register, handleSubmit, formState } = useForm<DateSchema>({
    resolver: yupResolver(dateSchema),
  });

  const { errors } = formState;

  function dateDifference(
    date1: Date,
    date2: Date
  ): { years: number; months: number; days: number } {
    const diffMilliseconds = Math.abs(date2.getTime() - date1.getTime());

    const years = Math.floor(diffMilliseconds / (365.25 * 24 * 60 * 60 * 1000));

    const remainingMilliseconds =
      diffMilliseconds - years * 365.25 * 24 * 60 * 60 * 1000;

    const months = Math.floor(
      remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000)
    );

    const remainingMillisecondsAfterMonths =
      remainingMilliseconds - months * 30.44 * 24 * 60 * 60 * 1000;

    const days = Math.floor(
      remainingMillisecondsAfterMonths / (24 * 60 * 60 * 1000)
    );

    return { years, months, days };
  }

  const onSubmit = (data: { year: number; month: number; day: number }) => {
    const givenDate = new Date(data.year, data.month - 1, data.day);
    const today = new Date();
    const { years, months, days } = dateDifference(givenDate, today);
    setTotalDay(days.toString());
    setTotalMonth(months.toString());
    setTotalYear(years.toString());
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-16 bg-offWhite">
      <div className="w-[345px] py-12 bg-white rounded-t-3xl px-6 rounded-bl-3xl rounded-br-[95px] lg:px-[52px] lg:py-14 lg:min-w-[840px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-3 lg:gap-8">
            <CustomInput
              labelName="DAY"
              id="day"
              name="day"
              register={register}
              errors={errors}
            />
            <CustomInput
              labelName="MONTH"
              id="month"
              name="month"
              register={register}
              errors={errors}
            />
            <CustomInput
              labelName="YEAR"
              id="year"
              name="year"
              register={register}
              errors={errors}
            />
          </div>
          <div className="mb-8 flex before:content-[''] before:h-[2px] before:translate-y-8 before:bg-offWhite before:flex-1 after:content-[''] after:h-[2px] after:bg-offWhite after:flex-1 after:translate-y-8 lg:after:hidden lg:before:translate-y-12">
            <button
              type="submit"
              className="bg-customPurple mx-auto w-16 h-16 grid place-content-center rounded-full p-4 hover:bg-offBlack lg:w-24 lg:h-24"
            >
              <img src={buttonIcon} alt="button icon" />
            </button>
          </div>
        </form>
        <div>
          <p className=" text-5xl font-customPoppins font-black italic lg:text-[92px]">
            <span className="text-customPurple">{totalYear || "--"} </span>
            <span className="tracking-tighter">years</span>
          </p>
          <p className=" text-5xl font-customPoppins font-black italic lg:text-[92px]">
            <span className="text-customPurple">{totalMonth || "--"} </span>
            <span className="tracking-tighter">months</span>
          </p>
          <p className=" text-5xl font-customPoppins font-black italic lg:text-[92px]">
            <span className="text-customPurple">{totalDay || "--"} </span>
            <span className="tracking-tighter">days</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
