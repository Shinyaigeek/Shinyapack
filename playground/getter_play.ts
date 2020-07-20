const hoge: {
  asdf: Readonly<string>;
  cachedAsdf: string;
  notSmartAsdf: string;
} = {
  get asdf() {
    console.log("asdf is evaluated");
    return "asdf";
  },

  get cachedAsdf() {
    console.log("cachedAsdf is evaluated");
    delete this.cachedAsdf;
    return this.cachedAsdf = "cached asdf value";
  },

  notSmartAsdf: (() => {
    console.log("not smart asdf: hogeが作られた時に評価される");
    return "notSmartAsdf";
  })(),
};

console.log("-------- hogeが作られていこう, 呼び出されるまで評価されない");
console.log(hoge.asdf);

console.log("--------");
console.log(hoge.cachedAsdf);

console.log("--------");
console.log(hoge.asdf);

console.log("--------smart getterなので再評価されずcacheされた値が返る");
console.log(hoge.cachedAsdf);
