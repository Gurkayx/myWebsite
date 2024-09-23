import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // Dil dosyalarını yüklemek için
  .use(LanguageDetector) // Tarayıcı dilini otomatik algılamak için
  .use(initReactI18next) // react-i18next bağlayıcısı
  .init({
    supportedLngs: ["en", "tr"], // Desteklenen diller
    fallbackLng: "tr", // Tarayıcı dili tanınmazsa varsayılan dil
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // JSON dosyalarının yolu
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
