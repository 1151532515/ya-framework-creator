/*
平台接口的基础类
*/

import {EventConfig} from "../config/EventConfig";
import {eventDispatcher} from "../framework/event/EventDispatcher";

type ResultCallback = (code: number, res?: any) => void;

interface NavigateToProgram {
    path?: string;
    extraData?: string;
    envVersion?: string;
}

class BasePlatform {
    constructor() {
        this.listen();
    }

    protected onHide() {
        cc.game.on(cc.game.EVENT_HIDE, ()=>{
            eventDispatcher.dispatch(EventConfig.ON_HIDE);
        }, this);
    }

    protected onShow() {
        cc.game.on(cc.game.EVENT_SHOW, (params:any) => {
            eventDispatcher.dispatch(EventConfig.ON_SHOW, params);
        }, this);
    }

    onError() {
        window.onerror = () => {

        };
    }

    public report(data: any) {

    }

    public checkSession(cb?: ResultCallback) {
        if (cb) cb(0);
    }

    public authorize(scope, cb) {

    }

    public login(cb?: ResultCallback) {

    }

    public share(title: string, imageUrl: string, query: string, cb: ResultCallback) {
        cb(0);
    }

    public keepScreenOn() {

    }

    public hideKeyboard(cb?: ResultCallback) {

    }

    public exit() {

    }

    public forceUpdate() {

    }

    public getSystemInfoSync() {
        return {
            statusBarHeight: 0,
            brand: "",
            model: "",
        };
    }

    public setClipboardData(data: string) {

    }

    public navigateToProgram(appId: string, data: NavigateToProgram, cb?: ResultCallback) {

    }

    public previewImage(urls: string[], cb?: ResultCallback) {

    }

    public saveImageToPhotosAlbum(filePath: string, cb?: ResultCallback) {

    }

    public getSetting(scope: string, cb?: ResultCallback) {

    }

    public openSetting(scope?: string, cb?: ResultCallback) {
        if (cb) cb(0);
    }

    public garbageCollect() {
        cc.sys.garbageCollect();
    }

    public getBatteryLevel() {
        return "0";
    }

    public getPlatformName() {
        return 'web';
    }

    protected listen() {
        this.onShow();

        this.onHide();
    }
}

export {BasePlatform, ResultCallback};
