import React from "react";
import lang from "../utils/languageConstant"
const GtpSearchBar = () => {
  return (
    <div className="flex items-center justify-center w-full  pt-20 pb-4 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800">
      <form className=" flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-xl shadow-md w-full max-w-xl">
        <input
          type="text"
          placeholder={lang.hindi.placeHolder}
          className="flex-1 p-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-300 transition outline-none text-lg shadow-sm"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-red-500 text-white font-bold text-lg rounded-lg shadow hover:bg-red-600 hover:scale-105 transition duration-200 cursor-pointer"
        >
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GtpSearchBar;
