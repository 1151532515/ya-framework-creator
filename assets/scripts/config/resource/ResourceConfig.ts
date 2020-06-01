
/*
资源模块分类，用于模块资源加载
*/

let C: any = {};

C.base64_cube_square = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA1BMVEX///+nxBvIAAAACklEQVQI12MAAgAABAABINItbwAAAABJRU5ErkJggg==";

C.main = [
    ["module/game/game", cc.SpriteAtlas],
    "prefab/main",
    ["sound/click", cc.AudioClip],
    ["sound/bgm",   cc.AudioClip],
];

C.game_star = [
    ["module/game/game",        cc.SpriteAtlas],
    ["module/common/common",    cc.SpriteAtlas],
    "prefab/game_star",
    "prefab/game_star_item",
    ["sound/star_erase",        cc.AudioClip],
    ["sound/star_multi",        cc.AudioClip],
    ["sound/star_award_erase",  cc.AudioClip],
    ["sound/star_fadein",       cc.AudioClip],
    ["sound/die",               cc.AudioClip],
    ["sound/star_like_1",       cc.AudioClip],
    ["sound/star_like_2",       cc.AudioClip],
    ["sound/star_like_23",      cc.AudioClip],
    "prefab/dialog_item",
];

C.game_russia = [
    ["module/game/game",        cc.SpriteAtlas],
    ["module/common/common",    cc.SpriteAtlas],
    "prefab/game_russia",
];

C.game_haul = [
    ["module/game/game",        cc.SpriteAtlas],
    ["module/common/common",    cc.SpriteAtlas],
    "prefab/game_haul",
];

C.game_union = [
    ["module/game/game",        cc.SpriteAtlas],
    ["module/common/common",    cc.SpriteAtlas],
    "prefab/game_union",
    "prefab/game_star_item",
    "prefab/dialog_item",
    ["sound/star_like_1",       cc.AudioClip],
    ["sound/star_like_2",       cc.AudioClip],
    ["sound/star_like_23",      cc.AudioClip],
];

C.revive = [
    "prefab/dialog_revive"
];

C.pause = [
    "prefab/dialog_pause",
];

C.settle = [
    "prefab/dialog_settle",
];

C.rank = [
    "prefab/rank",
];

C.archive = [
    "prefab/dialog_archive",
];

let ResourceConfig = C;
export default ResourceConfig;