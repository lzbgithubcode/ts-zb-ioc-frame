/**
 * 接口定义
 */
import {IUser} from "./IUser";

export interface IUserService {

    // 获取用户信息
    getUserInfo: (id: number) => Promise<IUser>

    // 获取用户列表
    getUserList: ()=> Promise<IUser[]>;

}
