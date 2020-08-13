import {YaBaseComponent} from "../base/ya-base-component";
import {yaResourceManager} from "../manager/ya-resource-manager";

class YaUIHelper {
    /**
     * 实例化Prefab（由prefabPath指定prefab），注意：必须在YaBaseComponent及子类中调用，否则资源会泄露
     * @param prefabPath prefab路径
     * @param data 实例化后传给component的初始化数据
     * @param parent 父节点
     */
    public static async instantiatePath(prefabPath: string, data?: any, parent?: cc.Node) {
        return new Promise<cc.Node>((resolve, reject) => {
            yaResourceManager.load(prefabPath, cc.Prefab).then((prefab: cc.Prefab) => {
                const node = this.instantiate(prefab, data, parent);
                const component = node.getComponent(YaBaseComponent);
                if (component) component.addRef(prefabPath, cc.Prefab);
                resolve(node);
            }).catch(() => {
                reject();
            });
        });
    }

    public static instantiate(prefab: cc.Prefab, data?: any, parent?: cc.Node): cc.Node {
        const node: cc.Node = cc.instantiate(prefab);
        const component = node.getComponent(YaBaseComponent);
        if (component) component.init(data);
        node.parent = parent;
        return node;
    }
}

const yaUIHelper = YaUIHelper;
export {yaUIHelper};
