/**
 * 作者: lzb
 * 日期: 2022-03-31 15:49
 * 功能:
 */

import {Container} from "./container";
import {TestService,TAGS} from "./TestService";
import {iocController, iocInject} from "./decorator";

// 1. 创建容器
const container = new Container();


// 2.绑定接口注册- 到某个类
container.bind(TAGS.testService).to(TestService);


// 3. 使用注册的内容

class IndexController  {
     constructor(@iocInject(TAGS.testService) private testService: TestService) {
        this.testService = testService;
     }
}


const indexController = new IndexController();

console.log('===========',indexController);
