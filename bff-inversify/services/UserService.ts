/**
 * 作者: lzb
 * 日期: 2022-03-29 18:47
 * 功能:
 */
import {IUserService} from "../interfaces/IUserService";
import {IUser} from "../interfaces/IUser"
import {provide} from "inversify-binding-decorators";
import {SERVER_TAGS} from "../constants/tags";

@provide(SERVER_TAGS.UserService)  //注入server
export class UserService implements IUserService{

    private  userStorage: Array<IUser> = [
        {
            id:0,
            name:"马云",
            age: 56,
            sex: true,
            email: "18545454545@qq.com"
        },

        {
            id:1,
            name:"马化腾",
        }
    ];

    /**
     * 获取用户信息
     * @param id
     */
    getUserInfo(id: number): Promise<IUser> {
        return  new Promise<IUser>(resolve => {
            resolve(this.userStorage[id]);
        })
    }

    /**
     * 获取用户列表
     */
    getUserList():  Promise<IUser[]>{
        return new Promise<IUser[]>(resolve => {
            resolve(this.userStorage);
        })
    };


}

