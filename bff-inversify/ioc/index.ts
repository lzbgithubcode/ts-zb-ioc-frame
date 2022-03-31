/**
 * 提供动态加载注入的控制器，不用每次都是注入
 * container.bind<interfaces.Controller>(TYPE.Controller).to(IndexController).whenTargetNamed("IndexController");
 */
// 流式注入
import { fluentProvide } from "inversify-binding-decorators";


/**
 * 自定义流式注入
 * @param identifier  遇到这个类型
 * @param name    注入的名称
 */
const provideThrowable  = (identifier: symbol, name: string)=> {
    return fluentProvide(identifier).whenTargetNamed(name).done();
};
export {
    provideThrowable
}