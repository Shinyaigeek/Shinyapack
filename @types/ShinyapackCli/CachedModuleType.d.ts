import { File } from "../@babel/type.d.ts";

export interface CachedModuleType {
    id: string,
    path: string,
    ast: File
}