import { MaterialSchemes } from "@/styles/material-styles";

export type ThemeConfig = {
  profilePhotoUrl: string;
  materialSchemes: MaterialSchemes
};

export const THEME_NAMES = {
  chicago: "chicago" as const,
  inter: "inter" as const,
  red: "red" as const,
  // skyline: "skyline" as const,
  sunset: "sunset" as const,
} as const;

export type ThemeName = typeof THEME_NAMES[keyof typeof THEME_NAMES];

export const THEME_PROFILE_PHOTO_URLS: Record<ThemeName, string> = {
  chicago: "./assets/images/themes/chicago/profile-photo.jpg",
  inter: "./assets/images/themes/inter/profile-photo.jpg",
  red: "./assets/images/themes/red/profile-photo.jpg",
  sunset: "./assets/images/themes/sunset/profile-photo.jpg",
};

export type ThemeConfigs = Record<ThemeName, ThemeConfig>;