import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { appColor } from "../constants/Colors";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa6";
import toggleThemeStore from "../../zustand/darkMode";
import toggleLanguageStore from "../../zustand/language";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { toggleTheme, darkmode } = toggleThemeStore();
  const { toggleLanguage, language } = toggleLanguageStore();

  return (
    <div
      style={{ backgroundColor: appColor.backgrounPrimary }}
      className="w-full h-16 flex items-center px-5 flex-col md:flex-row justify-between gap-4 md:gap-10 z-50"
    >
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl md:text-4xl font-extrabold">Gdev</h1>
        <p className="md:block text-xs font-extrabold">Gürkay Çilinger</p>
      </div>
      <div className="flex gap-3 z-50">
        <button
          onClick={toggleLanguage}
          className="btn btn-primary flex items-center justify-center"
        >
          {language === "tr" ? (
            <p className="text-white font-semibold text-sm">EN</p>
          ) : (
            <p className="text-white font-semibold text-sm">TR</p>
          )}
        </button>
        <button
          onClick={toggleTheme}
          className="btn btn-primary flex items-center justify-center"
        >
          {darkmode ? (
            <FaLightbulb color="white" size={15} />
          ) : (
            <FaRegLightbulb color="white" size={15} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
