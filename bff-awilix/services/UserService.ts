/**
 * 作者: lzb
 * 日期: 2022-03-28 13:54
 * 功能:
 */
import {IUserAPI} from "../interfaces/IUserAPI";
import {IUserInfo} from "../interfaces/IUserData";

export default class UserService   implements IUserAPI<IUserInfo>{

    /**
     * 获取用户用户
     */
    getUserInfo() {
       return new Promise<IUserInfo>((resolve, reject) => {
             resolve({
                 userName: "张三",
                 age: 25,
                 sex: true
             })
       });
    };

    /**
     * 获取用户列表
     */
    getUserList(){
        return new Promise<Array<IUserInfo>>((resolve, reject) => {
            resolve([
                {
                    userName: "张三",
                    age: 25,
                    sex: true
                },
                {
                    userName: "李四",
                    age: 25
                },
            ])
        });
    }

}
