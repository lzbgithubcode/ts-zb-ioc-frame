/**
 * 作者: lzb
 * 日期: 2022-03-28 13:52
 * 功能:
 */
import {route, GET} from "awilix-koa";
import {IUserAPI} from "../interfaces/IUserAPI";
import {IUserInfo} from "../interfaces/IUserData";
import {IBaseResponse} from "../interfaces/IBaseResponse"
import {IRouterContext} from "koa-router";

@route("/api")
class UserApiController {
      private userService: IUserAPI<IUserInfo>;
      constructor({userService}: {userService: IUserAPI<IUserInfo>}) {
            this.userService = userService;
      }

      @route("/userInfo")
      @GET()
      async actionUserInfo(ctx: IRouterContext, next: ()=> void){
            const userInfo: IUserInfo  =  await this.userService.getUserInfo();
            ctx.body = this.getBodyData(userInfo);
      }

      @route("/userList")
      @GET()
      async actionUserList(ctx: IRouterContext, next: ()=> void){
            const userInfoList: Array<IUserInfo>  =  await this.userService.getUserList();
            ctx.body = this.getBodyData(userInfoList);
      }

      /**
       * 获取公共的返回数据
       */
      getBodyData(data: Array<Object> | Object): IBaseResponse{
            const body: IBaseResponse = {
                  code: 0,
                  message: "执行成功",
                  success: true,
                  data: data,
            };
            return body;
      }


}

export default UserApiController;
