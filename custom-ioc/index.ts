/**
 * 作者: lzb
 * 日期: 2022-03-31 15:49
 * 功能:
 */

import {Container} from "./Container";
import {TestService,TAGS} from "./TestService";

// 1. 创建容器
const container = new Container();


// 2.绑定接口注册
container.bind(TAGS.testService, ()=> new TestService())

// 定义类型
export type Constructor<T> =  new (...args: any[]) => {};

/**
 *  返回某个控制器class
 */
function iocController<T>(constructor: Constructor<T>) {
    class SubController extends constructor{
        constructor(...args: any[]) {
            super(args);
        }
    }
    return SubController;
}

/**
 * 返回某个对象的实例
 */
function iocInject(key: Symbol): Function {
    return () => {};
}


@iocController
class IndexController  {
     constructor(@iocInject(TAGS.testService) private testService: TestService) {
        this.testService = testService;
     }
}
