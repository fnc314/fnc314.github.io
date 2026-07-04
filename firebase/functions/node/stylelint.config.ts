import { type Config } from "stylelint";
import { config as parentConfig } from "./../stylelint.config.ts";

const config: Config = {
  ...parentConfig,
};

export default config;