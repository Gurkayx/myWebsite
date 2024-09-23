import { create } from "zustand";
import i18n from "../src/constants/i18n"; // i18next yapılandırmasını buradan import edin

// localStorage'dan dili kontrol eden fonksiyon
const getCurrentLanguage = () => {
  const currentLang = localStorage.getItem("language");
  return currentLang === "tr" ? "tr" : currentLang === "en" ? "en" : "tr"; // Varsayılan olarak Türkçe
};

const toggleLanguageStore = create((set) => ({
  language: getCurrentLanguage(), // başlangıçta localStorage'dan okunan değeri ayarlar
  toggleLanguage: () =>
    set((state) => {
      const newLang = state.language === "tr" ? "en" : "tr"; // Dil değiştirme
      localStorage.setItem("language", newLang); // Yeni dili localStorage'a kaydet
      i18n.changeLanguage(newLang); // i18next ile dili değiştir
      return { language: newLang }; // Durumu güncelle
    }),
}));

export default toggleLanguageStore;
