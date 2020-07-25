import { CachedModuleType } from "../../../../@types/ShinyapackCli/CachedModuleType.d.ts";

// TODO: 今回は, map objのkeyをincremental numberとしたけど, abs pathをhex hashにしたやつとかでもいいかも

export const isAlreadyMapped: (
  modulePath: string,
  moduleMap: Map<string, CachedModuleType>,
) => boolean = (modulePath, moduleMap) => {
    for (let [_, value] of moduleMap) {
        if(value.path === modulePath) {
            return true;
        }
    }

    return false;
};
