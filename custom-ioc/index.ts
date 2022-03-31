/**
 * 作者: lzb
 * 日期: 2022-03-31 15:49
 * 功能:
 */

// 定义类型
export type Constructor<T> =  new (...args: any[]) => {};

interface ITestService {
    getIndexInfo():void
}


class TestService implements ITestService{
      getIndexInfo(): void {

      }
}


function Controller<T>(constructor: Constructor<T>) {
    class SubController extends constructor{
        constructor(...args: any[]) {
            super(args);
        }
    }
    return SubController;
}


@Controller()
class IndexController  {
     constructor() {

     }
}
