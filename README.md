# Shinyapack 📦

This is webpack mini-clone.
I make this module-bundler for learning, so **DON'T USE THIS FOR PRODUCTION** .

## Feature ✨

* Shinyapack is composed just of `TypeScript`
* You can run Shinyapack on deno🦕, because there is no dependency on npm.
* Shinyapack is very small project, so you can catch up with this soon.

## How to use 🏃‍♂️

```
$git clone {this code}

$deno run --allow-read --allow-write {this project}/bin/shinyapack.ts {target javascript file}
```

## Example 🤓

```
$deno run --allow-read --allow-write bin/shinyapack.ts examples/main.js
```

input

main.js
```javascript
import hoge from "./module.js";

function asdf() {}

console.log(hoge);
```

module.js
```javascript
const hoge = "hoge";

export default hoge;
```

output

```javascript
const $_Shinyapack_modules = {
  1: exports => {
    const hoge = "hoge";
    exports["default"] = hoge;
    return exports;
  }
};
const $_Shinyapack_exports = {};

const $_Shinyapack_import = id => {
  if ($_Shinyapack_exports[id]) return $_Shinyapack_exports[id];
  return $_Shinyapack_modules[id]($_Shinyapack_exports[id] = {});
};

const {
  default: hoge
} = $_Shinyapack_import("1");

function asdf() {}

console.log(hoge);
```

## LoadMap 🚗

- [ ] `export default`
- [ ] `import default`
- [ ] bundle
- [ ] format module architecture
- [ ] stronger typescript(because `deno-types` does not have the effect on type-check on development)
- [ ] more module test
- [ ] unit test
- [ ] performance checker
- [ ] named import, named export
- [ ] handle `.ts`, `.css`, `.html`, and any asserts with loader.
- [ ] configuration file
- [ ] `export { a as x }`
- [ ] File watcher
- [ ] dev-server
- [ ] support import map
- [ ] bundle file for nodejs, browser, worker
- [ ] code splitting

## LICENSE 🗒
MIT