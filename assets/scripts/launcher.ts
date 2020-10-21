/*
启动器
主场景被加载后，用来对游戏的初始化
*/

// import BasicPlatform from "./Platform/BasicPlatform";
// import WxPlatform from "./Platform/WxPlatform";
import {ya} from "./framework/ya";
import {modelManager} from "./manager/ModelManager";
import {controllerManager} from "./manager/ControllerManager";
import {viewManager} from "./framework/manager/ViewManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Launcher extends cc.Component {
    protected start() {
        ya.init();

        modelManager.init();
        controllerManager.init();

        this.launch();
    }

    private launch() {
        viewManager.show("common");
        viewManager.show("loading");
    }
}
