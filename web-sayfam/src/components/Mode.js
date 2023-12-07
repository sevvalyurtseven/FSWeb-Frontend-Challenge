
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { enAction, trAction } from "../actions/languageAction";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Mode() {
  const [dark, setDark] = useLocalStorage("darkMode", true);
  const [enLanguage, setEnLanguage] = useLocalStorage("language", true);  //neden true olunca local'e kaydetmiyor?

  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    enLanguage ? dispatch(enAction()) : dispatch(trAction());
  }, [dark, enLanguage]);

  const changeDarkMode = () => {
    setDark(!dark);
    //document.documentElement.classList.toggle("dark", dark);
    
  };

  const changeLanguageMode = () => {
     setEnLanguage(!enLanguage);
     //enLanguage ? dispatch(enAction()) : dispatch(trAction());
   
  };

  return (
    <div className="flex flex-row-reverse justify-between md:block">
      <div className="flex items-center md:gap-3 float-right pe-3 text-[#777777] font-bold text-base">
        <button
          onClick={changeLanguageMode}
          className="dark:text-[#BAB2E7] text-[#4731D3]"
        >
          {enLanguage ? "TÜRKÇE'YE GEÇ" : "ENGLISH"}
        </button>
      </div>
      <span className="md:float-right pe-3 hidden md:inline-block text-[#777777]">
        |
      </span>
      <div className="flex items-center md:gap-3 float-right pe-3 text-[#777777] dark:text-[#D9D9D9] font-bold text-base">
        <div className="flex flex-col justify-center items-center">
          <div
            className="md:w-14 md:h-7 w-12 h-6 flex items-center dark:bg-[#3A3A3A] bg-[#4731D3] rounded-full sm:p-1 cursor-pointer duration-700 ease-in-out"
            onClick={changeDarkMode}
          ></div>
        </div>
        {dark ? "DARK MODE" : "LIGHT MODE"}
      </div>
    </div>
  );
}

