// types/rollup-plugin-peer-deps-external.d.ts
declare module 'rollup-plugin-peer-deps-external' {
    import { Plugin } from 'rollup';

    export interface Options {
        includeDependencies?: boolean | string[];
    }

    export default function peerDepsExternal(options?: Options): Plugin;
}