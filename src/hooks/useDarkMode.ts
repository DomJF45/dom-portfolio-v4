const getThemeFromLocalStorage = (): string | null => {
  return localStorage.getItem("theme");
};

const setThemeToLocalStorage = (theme: string): void => {
  localStorage.setItem("theme", theme);
};

const setThemeToDocument = (theme: string): void => {
  document.documentElement.setAttribute("data-theme", theme);
};

const toggleTheme = () => {
  const theme = getThemeFromLocalStorage();
  if (theme !== undefined && theme === "dark") {
    setThemeToDocument("light");
    setThemeToLocalStorage("light");
  } else {
    setThemeToDocument("dark");
    setThemeToLocalStorage("dark");
  }
};

export const useDarkMode = (): (() => void) => {
  const theme = getThemeFromLocalStorage();
  if (theme !== null) {
    setThemeToDocument(theme);
  }
  return toggleTheme;
};
