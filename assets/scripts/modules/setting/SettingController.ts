import {EventConfig} from "../../config/EventConfig";
import {BaseController} from "../../framework/mvc/BaseController";
import {dialogManager} from "../../framework/manager/DialogManager";
import {DialogShowTypes} from "../../framework/mvc/dialog/BaseDialog";
import {resourceManager} from "../../framework/manager/ResourceManager";

class SettingController extends BaseController {
    protected initGlobalListener() {
        super.initGlobalListener();

        this.addGlobalListener(EventConfig.EVT_SHOW_PAUSE, this.onShowPause, this);
    }

    onShowPause (data: any) {
        const prefabPath = 'resources/prefab/dialog_pause';
        resourceManager.load(prefabPath, cc.Prefab).then(()=> {
            dialogManager.show(prefabPath, data, {
                showType: DialogShowTypes.SCALE,
                dataLoaded: true,
            });
        });
    }
}

export {SettingController};
