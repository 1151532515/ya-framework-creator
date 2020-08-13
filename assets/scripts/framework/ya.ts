import {YaBaseComponent} from "./base/ya-base-component";
import {YaController} from "./mvc/ya-controller";
import {YaDialogProperty} from "./mvc/ya-dialog-property";
import {Singleton} from "./singleton/Singleton";
import {YaView} from "./mvc/ya-view";
import {YaModel} from "./mvc/ya-model";
import {YaDialog, YaDialogCharacter, YaDialogShowTypes} from "./mvc/ya-dialog";
import {YaStorageConfig} from "./config/ya-storage-config";
import {yaEventDispatcher} from "./event/ya-event-dispatcher";
import {yaLocalStorage} from "./storage/ya-local-storage";
import {yaDialogManager} from "./manager/ya-dialog-manager";
import {yaLayerManager} from "./manager/ya-layer-manager";
import {yaSoundManager} from "./manager/ya-sound-manager";
import {yaViewManager} from "./manager/ya-view-manager";
import {yaResourceManager} from "./manager/ya-resource-manager";
import {yaUIHelper} from "./utils/ya-ui-helper";
import {yaButtonHelper} from "./utils/ya-button-helper";
import {yaUtils} from "./utils/ya-utils";
import {yaDateUtils} from "./utils/ya-date-utils";
import {yaFunctions} from "./utils/ya-functions";

class Ya {
    public static BaseComponent = YaBaseComponent;
    public static Model = YaModel;
    public static View = YaView;
    public static Dialog = YaDialog;
    public static DialogShowTypes = YaDialogShowTypes;
    public static DialogCharacter = YaDialogCharacter;
    public static DialogProperty = YaDialogProperty;
    public static Controller = YaController;
    public static Singleton = Singleton;

    public static utils = yaUtils;
    public static func = yaFunctions;
    public static dates = yaDateUtils;
    public static button = yaButtonHelper;
    public static uiHelper = yaUIHelper;

    public static soundManager = yaSoundManager;
    public static dialogManager = yaDialogManager;
    public static viewManager = yaViewManager;
    public static layerManager = yaLayerManager;
    public static resourceManager = yaResourceManager;
    public static eventDispatcher = yaEventDispatcher;
    public static localStorage = yaLocalStorage;

    public static StorageConfig = YaStorageConfig;

    public static init() {
        this.layerManager.init();
        this.eventDispatcher.init();
        this.resourceManager.init();
        this.soundManager.init();
        this.dialogManager.init();
    }
}

const ya = Ya;
export {ya};
