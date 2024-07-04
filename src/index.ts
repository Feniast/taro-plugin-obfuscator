import type { IPluginContext } from "@tarojs/service";
import webpackChain from "webpack-chain";
import { TaroObfuscatorPluginOptions, WebpackObfuscatorOptions } from "./types";
import { WebpackObfuscatorPlugin } from "./plugin";

const defaultObfuscatorOptions: WebpackObfuscatorOptions = {
  optionsPreset: "low-obfuscation",
  deadCodeInjection: false,
  debugProtection: false,
  selfDefending: false,
  disableConsoleOutput: false,
  ignoreImports: true,
};

const defaultExcludes = ["taro.js", "runtime.js", "vendors.js"];

export default (
  ctx: IPluginContext,
  pluginOpts: TaroObfuscatorPluginOptions
) => {
  ctx.modifyWebpackChain(({ chain }: { chain: webpackChain }) => {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Taro obfuscator plugin only runs when NODE_ENV=production");
      return;
    }
    if (process.env.TARO_ENV === "h5" || process.env.TARO_ENV === "rn") return;
    chain
      .plugin(WebpackObfuscatorPlugin.pluginName)
      .use(WebpackObfuscatorPlugin, [
        { ...defaultObfuscatorOptions, ...pluginOpts.options },
        pluginOpts.excludes ?? defaultExcludes,
      ]);
  });
};
