import { create } from "zustand";

const getInitialTheme = () => {
  return localStorage.getItem("theme") || "lofi"; 
};

const toggleThemeStore = create((set) => ({
  themeName: getInitialTheme(),
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.themeName === "lofi" ? "business" : "lofi";
      localStorage.setItem("theme", newTheme);
      return { themeName: newTheme };
    }),
}));

export default toggleThemeStore;
