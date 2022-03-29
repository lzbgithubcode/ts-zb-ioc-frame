import {interfaces, controller, httpGet, TYPE} from "inversify-koa-utils";
import {inject} from "inversify";
import {SERVER_TAGS} from "../constants/tags";
import {IUserService} from "../interfaces/IUserService";
import {provideThrowable} from "../ioc";
import {IRouterContext} from "koa-router";
import {IUser} from "../interfaces/IUser";

@controller("/api")
@provideThrowable(TYPE.Controller, "APIController") // 标识可以被注入 // 标识可以被注入
class APIController implements interfaces.Controller{
    // 获取注入的service
    constructor(@inject(SERVER_TAGS.UserService) private userService: IUserService) {
        this.userService = userService;
    }
    @httpGet("/")
    private async actionUserIndex(ctx: IRouterContext, next: ()=> Promise<any>){

        ctx.body = "我是API控制器"
    }

    @httpGet("/user/info")
    private async actionUserInfo(ctx: IRouterContext, next: ()=> Promise<any>){
        const  data: IUser = await this.userService.getUserInfo(0);
        ctx.body = {
            data
        }
    }
    @httpGet("/user/list")
    private async actionUserList(ctx: IRouterContext, next: ()=> Promise<any>){
        const  data: IUser[] = await this.userService.getUserList();
        ctx.body = {
            data
        }
    }
}

export default APIController;