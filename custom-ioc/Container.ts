/**
 * 作者: lzb
 * 日期: 2022-03-31 15:52
 * 功能:
 */
/**
 * 创建容器
 */
export type TKeyIdentifier = string | Symbol;

export interface IContainer {
    // 绑定
    bind(key: TKeyIdentifier, callBack:Function): void,
    // 获取值
    get(key: TKeyIdentifier): void,
}
export class Container implements IContainer{
      private  _map: Map< TKeyIdentifier, {callBack: Function}>
      constructor() {
          this._map = new Map();
      }
      public bind(key: TKeyIdentifier, callBack: Function): void {
           this._map.set(key, {
               callBack
           });
      }
      public get(key: TKeyIdentifier): void {
          const item = this._map.get(key);
          if(item){
              return item.callBack();
          }else {
              throw new Error(`未找到${String(key)}对应的的值`);
          }

      }


}



