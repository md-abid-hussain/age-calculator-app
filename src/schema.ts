import * as yup from "yup";

const isLeapYear = (year: number) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const getMaxDaysInMonth = (month: number, year: number) => {
  const daysInMonth: Record<number, number> = {
    1: 31,
    2: isLeapYear(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  return daysInMonth[month];
};

const schema = yup.object().shape({
  day: yup
    .number()
    .typeError("This field is required")
    .integer("Must be a valid day")
    .min(1, "Must be a valid day")
    .max(31, "Must be a valid day")
    .test("maxDaysInMonth", "Must be a valid date", function (value) {
      const month = this.parent?.month;
      const year = this.parent?.year;
      const maxDaysInMonth = getMaxDaysInMonth(month, year);
      return !value || value <= maxDaysInMonth;
    })
    .required("This field is required"),
  month: yup
    .number()
    .typeError("This field is required")
    .integer("Must be a valid month")
    .min(1, "Must be a valid month")
    .max(12, "Must be a valid month")
    .required("This field is required"),
  year: yup
    .number()
    .typeError("This field is required")
    .integer("Must be a valid year")
    .min(1900, "Must be greater than 1900")
    .max(2100, "Must be in the past")
    .required("This field is required")
    .test("validDate", "Should be in the past", function (value) {
      const day = this.parent?.day;
      const year = this.parent?.year;
      const month = this.parent?.month;
      const today = new Date();
      const currentDay = today.getDate();
      const currentMonth = today.getMonth() + 1;
      const currentYear = today.getFullYear();
      return (
        !value ||
        year < currentYear ||
        (year === currentYear && month < currentMonth) ||
        (year === currentYear && month === currentMonth && day <= currentDay)
      );
    }),
});

export default schema;
