import React from "react";
import { useTranslation } from "react-i18next";
import toggleLanguageStore from "../../zustand/language";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  const { t } = useTranslation();
  const { language } = toggleLanguageStore();
  return (
    <div className="flex flex-col px-10 h-36 mb-20 justify-between">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-bold text-primary">{t("followmesocialmedia")}</h2>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-row gap-5">
          <a target="_blank" href="https://www.instagram.com/gurkaycilinger/">
            <FaInstagram
              size={40}
              className="text-secondary hover:scale-110 transition-all cursor-pointer"
            />
          </a>
          <a target="_blank" href="https://x.com/gurk0y">
            <FaXTwitter
              size={40}
              className="text-secondary hover:scale-110 transition-all cursor-pointer"
            />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/gurkay/">
            <FaLinkedinIn
              size={40}
              className="text-secondary hover:scale-110 transition-all cursor-pointer"
            />
          </a>
          <a target="_blank" href="https://github.com/Gurkayx">
            <FaGithub
              size={40}
              className="text-secondary hover:scale-110 transition-all cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
