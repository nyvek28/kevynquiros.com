export type Theme = "primary" | "secondary" | "tertiary";
const THEME_TO_CLASS = {
  primary: "",
  secondary: "bg-secondary-bg text-secondary-text",
  tertiary: "bg-tertiary-bg text-primary-text",
};

export default function useTheme(theme: Theme) {
  const themeClass = THEME_TO_CLASS[theme];

  return {
    themeClass,
  };
}
