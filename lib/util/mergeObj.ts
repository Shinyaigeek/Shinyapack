import { memorize } from "./memorize.ts";

export const mergeObj: <T, U>(obj: T, tar: U) => T & U = (obj, tar) => {
  const descriptors = Object.getOwnPropertyDescriptors(tar);
  for (const name of Object.keys(descriptors)) {
    const descriptor = descriptors[name];
    if (descriptor.get) {
      const fn = descriptor.get;
      Object.defineProperty(obj, name, {
        configurable: false,
        enumerable: true,
        get: memorize(fn),
      });
    } else if (typeof descriptor.value === "object") {
      Object.defineProperty(obj, name, {
        configurable: false,
        enumerable: true,
        writable: false,
        value: mergeObj({}, descriptor.value),
      });
    } else {
      throw new Error(
        "Exposed values must be either a getter or an nested object",
      );
    }
  }
  return (Object.freeze(obj)) as typeof obj & typeof tar;
};
