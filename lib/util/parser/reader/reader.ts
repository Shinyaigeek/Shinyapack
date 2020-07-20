export const reader: (target: string) => Promise<string> = (target) => {
  return Deno.readTextFile(target);
};
