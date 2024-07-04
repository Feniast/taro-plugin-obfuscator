# taro-plugin-obfuscator

## Usage

**Warning**: It has been only tested on some wechat mini programs, not guaranteed the plugin will not break other platform mini app code. And the output code size will increase apparently, so prepare for sub-packaging for your mini apps.

### Install

```sh
npm i taro-plugin-obfuscator -D
# or
yarn add taro-plugin-obfuscator -D
```

### Plugin Usage

```js
const config = {
  plugins: [
    [
      "taro-plugin-obfuscator",
      {
        options: {},
        excludes: ["taro.js", "vendors.js", "runtime.js"],
      },
    ],
  ],
};
```

#### options
Type: `Object` 
Default: 
```json
{
  optionsPreset: "low-obfuscation",
  deadCodeInjection: false,
  debugProtection: false, // required for mini-program
  selfDefending: false, // required for mini-program
  disableConsoleOutput: false, // required for mini-program
  ignoreImports: true, // required for mini-program
}
```

Options for [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator). Should be passed exactly like described on their page.

#### excludes
Type: `Array` Default: `["taro.js", "runtime.js", "vendors.js"]`

Bundle name is output file name after webpack compilation. With multiple webpack entries you can set bundle name in `output` object with aliases `[name]` or `[id]`.

Syntax for excludes array is syntax for [multimatch](https://github.com/sindresorhus/multimatch) package. You can see examples on package page.

Few syntax examples: `['excluded_bundle_name.js', '**_bundle_name.js'] or 'excluded_bundle_name.js'`
