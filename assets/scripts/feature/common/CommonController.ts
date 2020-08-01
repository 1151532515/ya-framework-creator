/*
通用控制器
任何通用的、全局性的东西都可以放到这里
*/

import ya from "../../framework/ya"
import { EventConfig } from "../../config/EventConfig";

export default class CommonController extends ya.Controller {
    get root () {
        return ya.layer.top;
    }

    get component (): string {
        return "CommonView";
    }

    initGlobalListener() {
        cc.game.on(cc.game.EVENT_SHOW, this.onShow, this);
        cc.game.on(cc.game.EVENT_HIDE, this.onHide, this);

        ya.eventDispatcher.on(EventConfig.SHOW_TOAST,       this.onShowToast, this);        // 显示toast
        ya.eventDispatcher.on(EventConfig.SHOW_WAITING,     this.onShowWaitting, this);     // 显示等待界面
        ya.eventDispatcher.on(EventConfig.REMOVE_WAITTING,  this.onRemoveWaitting, this);   // 移除等待界面
    }

    onShow (params: any) {

    }

    onHide () {

    }

    onShowWaitting () {

    }

    onRemoveWaitting () {

    }

    onShowToast (params: any) {
        this.view.showToast(params);
    }
}
