export const readerSync: (target: string) => string = (target) => {
  return Deno.readTextFileSync(target);
};
