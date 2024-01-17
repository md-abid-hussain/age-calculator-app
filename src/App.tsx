import buttonIcon from "./assets/images/icon-arrow.svg";
const App = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-16 bg-offWhite">
      <div className="w-[345px] py-12 bg-white rounded-t-3xl px-6 rounded-bl-3xl rounded-br-[95px]">
        <form>
          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="day"
                className="text-xs text tracking-widest font-bold text-smokeGray"
              >
                DAY
              </label>
              <input
                type="number"
                id="day"
                name="day"
                className="w-[86px] border-2 border-offWhite rounded-md p-4 text-sm focus:outline-none focus:ring-[0.5px] focus:border-customPurple"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="month"
                className="text-xs text tracking-widest font-bold text-smokeGray"
              >
                MONTH
              </label>
              <input
                type="number"
                id="month"
                name="month"
                className="w-[86px] border-2 border-offWhite rounded-md p-4 text-sm focus:outline-none focus:ring-[0.5px] focus:border-customPurple"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="year"
                className="text-xs text tracking-widest font-bold text-smokeGray"
              >
                YEAR
              </label>
              <input
                type="number"
                id="year"
                name="year"
                className="w-[86px] border-2 border-offWhite rounded-md p-4 text-sm focus:outline-none focus:ring-[0.5px] focus:border-customPurple"
              />
            </div>
          </div>
          <div className="my-8 flex before:content-[''] before:h-[2px] before:translate-y-8 before:bg-offWhite before:flex-1 after:content-[''] after:h-[2px] after:bg-offWhite after:flex-1 after:translate-y-8">
            <button
              type="submit"
              className="bg-customPurple mx-auto w-16 h-16 grid place-content-center rounded-full p-4 hover:bg-offBlack"
            >
              <img src={buttonIcon} alt="button icon" />
            </button>
          </div>
        </form>
        <div>
          <p className="text-6xl font-customPoppins font-black italic">
            <span className="text-customPurple">32 </span>
            <span className="tracking-tighter">years</span>
          </p>
          <p className="text-6xl font-customPoppins font-black italic">
            <span className="text-customPurple">12 </span>
            <span className="tracking-tighter">months</span>
          </p>
          <p className="text-6xl font-customPoppins font-black italic">
            <span className="text-customPurple">30 </span>
            <span className="tracking-tighter">days</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
