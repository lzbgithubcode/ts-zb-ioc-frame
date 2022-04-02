/**
 * 作者: lzb
 * 日期: 2022-04-02 14:16
 * 功能:
 */
import "reflect-metadata";
import {interfaces} from "./interfaces";


/**
 * 方法注入元数据
 */
export function  iocInject(key: string | symbol): Function {
    return (target: any, propertyKey: string, index: number) => {
         const metadata = {
             key: propertyKey,
             value: key
         };
         Reflect.defineMetadata(`custom:paramtypes#${index}`, metadata, target)
    };
}

/**
 *  类注入元数据
 */
export function iocInjectable(constructor: interfaces.TConstructor) {
    class SubController extends constructor{
        constructor(...args: any[]) {
            super(args);
        }
    }
    return  SubController;
}




