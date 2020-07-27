export const checkOutputPath = async (output: string) => {
  const folder = output.split("/");
  for (let i = 0; i < folder.length - 1; i++) {
    const tar = folder.slice(0, i + 1).join("/");
    if (!await exists(tar)) {
      Deno.mkdirSync(tar);
    }
  }
};

export const exists = async (path: string) => {
  try {
    await Deno.stat(path);
    return true;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return false;
    } else {
      throw error;
    }
  }
};
