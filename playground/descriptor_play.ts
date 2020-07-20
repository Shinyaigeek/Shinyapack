const obj = {};

Object.defineProperty(obj, "asdf", {
  enumerable: true,
  value: "hoge",
});

Object.defineProperty(obj, "nay", {
  enumerable: false,
  value: "n",
});

// @ts-ignore
console.log(obj.asdf, obj.nay);

for (let key in obj) {
  //@ts-ignore
  console.log(key, obj[key]);
}
