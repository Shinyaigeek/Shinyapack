import { memorize } from "../lib/util/memorize.ts";

const hoge = () => {
  return "hoge";
};

console.log("----not memorize----");

console.log(hoge);

console.log(hoge());

console.log(hoge);

console.log("-----memorize ------");

console.log(hoge);

const fac = memorize(hoge);

console.log("----exec first time-----");

console.log(fac, fac());

console.log(hoge);

console.log("----exec second time-----");

console.log(fac, fac());

console.log(hoge); // hoge must be undefined
