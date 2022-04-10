/**
 * 作者: lzb
 * 日期: 2022-03-31 15:49
 * 功能:
 */

import {Container} from "./container";
import {TestService,TAGS} from "./TestService";
import {iocController} from "./decorator";

// 1. 创建容器
const container = new Container();


// 2.绑定接口注册- 到某个类
container.bind(TAGS.testService).to(TestService);


// 3. 使用注册的内容

@iocController
class IndexController  {
     constructor(@iocInject(TAGS.testService) private testService?: TestService) {
        this.testService = testService;
     }
     info(){
        console.log('获取到的testService-----',this.testService);
        this.testService?.getIndexInfo();
     }
}


/**
 * 方法注入元数据,正常应该返回注册的实例， 比如新的constructor
 */
export function  iocInject(key: string | symbol): Function {
    return (target: Function, targetKey: string, index: number) => {

        // 表示在构造函数使用
        if(!targetKey){
            // 设置key对应的示例
            Reflect.defineMetadata(key,container.get(key),target)
        }
    };
}


const indexController = new IndexController();
indexController.info();
console.log('----执行完毕------');

