/**
 * 作者: lzb
 * 日期: 2022-03-31 15:52
 * 功能:
 */
/**
 * 创建容器
 */
import {interfaces} from "./interfaces";
import IToBinding = interfaces.IToBinding;

export interface IContainer {
    /**
     * 绑定API
     * @param key  映射关系的key
     * @param target   映射关系的实例
     */
    bind<T>(key: interfaces.TKeyIdentifier): {},

    /**
     * 获取值API
     * @param key 映射关系的key
     */
    get<T>(key: interfaces.TKeyIdentifier): T,
}
export class Container implements IContainer{
      private  _map: Map< interfaces.TKeyIdentifier, interfaces.TConstructor>;
      constructor() {
          this._map = new Map();
      }
      public bind(key: interfaces.TKeyIdentifier): IToBinding {
          return {
              to:(bindTarget:interfaces.TConstructor) => {
                  this._map.set(key,bindTarget);
              }
          }

      }
      public get<T>(key: interfaces.TKeyIdentifier): T {
          const target = this._map.get(key);
          if(target){
              return <T>new target();
          }else {
              throw new Error(`未找到${String(key)}对应的的值`);
          }

      }

}



