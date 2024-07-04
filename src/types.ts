import type { IOptions } from "javascript-obfuscator/typings/src/interfaces/options/IOptions";

export type WebpackObfuscatorOptions = Omit<
  Partial<Pick<IOptions, keyof IOptions>>,
  | "inputFileName"
  | "sourceMapBaseUrl"
  | "sourceMapFileName"
  | "sourceMapMode"
  | "sourceMapSourcesMode"
> & {
  debug?: boolean;
};

export type TaroObfuscatorPluginOptions = {
  options?: WebpackObfuscatorOptions;
  excludes: string[];
};
