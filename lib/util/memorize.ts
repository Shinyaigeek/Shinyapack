export const memorize: <T>(fn: () => T) => () => T = (fn) => {
  let memorized = false;

  let result: unknown;

  return () => {
    if (memorized) {
      return result as ReturnType<typeof fn>;
    } else {
      result = fn();
      memorized = true;

      // メモリを解放するため
      //@ts-ignore
      fn = undefined;

      return result as ReturnType<typeof fn>;
    }
  };
};
