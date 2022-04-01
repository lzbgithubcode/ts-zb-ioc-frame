
export interface ITypes {
    [key: string]: Symbol  // key是string  value 是symbol
}

// 定义类型
export const TAGS: ITypes = {
    testService : Symbol.for("TestService")
}



export interface ITestService {
    getIndexInfo():void
}


export class TestService implements ITestService{
    getIndexInfo(): void {

    }
}
