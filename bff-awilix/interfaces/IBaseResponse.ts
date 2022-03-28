/**
 * 作者: lzb
 * 日期: 2022-03-28 14:45
 * 功能:
 */

/**
 * 整体响应结构
 */
export interface IBaseResponse {
    code: number,
    message?: string,
    success: boolean,
    data?: Array<Object> | Object
}
