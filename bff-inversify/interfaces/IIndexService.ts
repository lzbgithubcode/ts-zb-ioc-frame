/**
 * 作者: lzb
 * 日期: 2022-03-29 17:35
 * 功能:
 */

/**
 * 接口定义
 */
export interface IIndexService<T> {

    // 获取用户信息
    getUserInfo: (id: number) => Promise<T>

    // 获取用户列表
    getUserList: ()=> Promise<T>;

}
