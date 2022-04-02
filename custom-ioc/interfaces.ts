/**
 * 作者: lzb
 * 日期: 2022-04-02 14:36
 * 功能:
 */

export namespace interfaces{
    // 导出
    export type TConstructor =  new (...args: any[]) => {};

    export interface IToBinding {
         to(bindTarget:interfaces.TConstructor):void
    }
    export type TKeyIdentifier = string | symbol;



}
