/**
 * 作者: lzb
 * 日期: 2022-03-28 13:50
 * 功能:
 */

/**
 * 用户接口
 */
export interface IUserAPI<T> {
    getUserInfo: () => Promise<T>;
    getUserList: ()=> Promise<Array<T>>
}
