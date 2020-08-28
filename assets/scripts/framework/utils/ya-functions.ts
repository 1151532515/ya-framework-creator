import {lodash} from "../libs/LibEntry";

class YaFunctions {
    /**
     * 打乱一个数组
     */
    public static mix(arr: any) {
        const len = arr.length;
        for (let i = 0; i < len; i++) {
            lodash.swap(arr, i, lodash.random(0, len - 1));
        }
    }

    public static memory(arr: any, r: number, c: number, value: boolean | number | string | {}) {
        if (c <= 1) {
            lodash.times(r, () => {
                arr.push(value);
            });
        } else {
            lodash.times(r, (i) => {
                arr.push(value);
                lodash.times(c, () => {
                    arr[i].push(value);
                });
            });
        }
    }

    public static isValid(v: any) {
        return !(v === null || v === undefined);
    }

    public static bfs(map: [[]], r: number, c: number, R: number, C: number) {
        const used = [];
        const ret = [];

        this.memory(used, R, C, false);
        used[r][c] = true;

        let p: { r, c, n };
        let nr: number;
        let nc: number;
        const stays = [{r, c, n: 0}];
        const dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]];
        while (stays.length > 0) {
            ret.push(p = stays.shift());
            for (let i = 0; i < 4; i++) {
                nr = p.r + dirs[i][0];
                nc = p.c + dirs[i][1];
                if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
                    if (map[nr][nc] === map[r][c] && !used[nr][nc]) {
                        used[nr][nc] = true;
                        stays.push({r: nr, c: nc, n: p.n + 1});
                    }
                }
            }
        }

        return ret;
    }
}

const yaFunctions = YaFunctions;
export {yaFunctions};
