/**
 * 作者: lzb
 * 日期: 2022-03-29 18:25
 * 功能:
 */
import {interfaces, controller, httpGet, TYPE} from "inversify-koa-utils";
import {IRouterContext} from "koa-router";
import {provideThrowable} from "../ioc";


@controller("/")
@provideThrowable(TYPE.Controller, "IndexController") // 标识可以被注入 // 标识可以被注入
class IndexController implements interfaces.Controller{
       @httpGet("/")
       private async indexAction(ctx: IRouterContext, next: ()=> Promise<any>){
           ctx.body = "服务已经完成";
       }

}

export default IndexController;
