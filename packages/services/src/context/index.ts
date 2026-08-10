import { type ColorContrast, type ColorScheme, type MaterialSchemeName, type ThemeName } from "@fnc314/packages.types";
import { type Context, createContext } from "@lit/context";

export interface ThemeContext {
  name: ThemeName;
  scheme: ColorScheme;
  contrast: ColorContrast;
  materialTheme: MaterialSchemeName;
};

const THEME_CONTEXT_KEY: Symbol = Symbol.for("THEME_CONTEXT_KEY");

export const ThemeContextKey: Context<Symbol, ThemeContext> = createContext<ThemeContext, Symbol>(THEME_CONTEXT_KEY)