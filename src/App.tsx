import buttonIcon from "./assets/images/icon-arrow.svg";
const App = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-16 bg-[#f0f0f0]">
      <div className="w-[345px] py-12 bg-[#ffffff] rounded-t-3xl px-6 rounded-bl-3xl rounded-br-[95px]">
        <form>
          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="day"
                className="text-xs text tracking-widest font-bold text-[#716F6F]"
              >
                DAY
              </label>
              <input
                type="number"
                id="day"
                name="day"
                className="w-[86px] border-2 border-[#f0f0f0] rounded-md p-4 text-sm focus:outline-none focus:ring-[0.5px] focus:border-[#854dff]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="month"
                className="text-xs text tracking-widest font-bold text-[#716F6F]"
              >
                MONTH
              </label>
              <input
                type="number"
                id="month"
                name="month"
                className="w-[86px] border-2 border-[#f0f0f0] rounded-md p-4 text-sm focus:outline-none focus:ring-[0.5px] focus:border-[#854dff]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="year"
                className="text-xs text tracking-widest font-bold text-[#716F6F]"
              >
                YEAR
              </label>
              <input
                type="number"
                id="year"
                name="year"
                className="w-[86px] border-2 border-[#f0f0f0] rounded-md p-4 text-sm focus:outline-none focus:ring-[0.5px] focus:border-[#854dff]"
              />
            </div>
          </div>
          <div className="my-8 flex before:content-[''] before:h-[2px] before:translate-y-8 before:bg-[#f0f0f0] before:flex-1 after:content-[''] after:h-[2px] after:bg-[#f0f0f0] after:flex-1 after:translate-y-8">
            <button
              type="submit"
              className="bg-[#854dff] mx-auto w-16 h-16 grid place-content-center rounded-full p-4 hover:bg-black"
            >
              <img src={buttonIcon} alt="button icon" />
            </button>
          </div>
        </form>
        <div>
          <p className="text-6xl font-customPoppins font-black italic">
            <span className="text-[#854dff]">32 </span>
            <span className="tracking-tighter">years</span>
          </p>
          <p className="text-6xl font-customPoppins font-black italic">
            <span className="text-[#854dff]">12 </span>
            <span className="tracking-tighter">months</span>
          </p>
          <p className="text-6xl font-customPoppins font-black italic">
            <span className="text-[#854dff]">30 </span>
            <span className="tracking-tighter">days</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
