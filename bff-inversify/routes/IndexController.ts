/**
 * 作者: lzb
 * 日期: 2022-03-29 18:25
 * 功能:
 */
import {interfaces, controller, httpGet} from "inversify-koa-utils";
import {injectable, inject} from "inversify";
import {RouterContext} from "koa-router";

@controller("/")
@injectable()
class IndexController implements interfaces.Controller{
       constructor() {
       }
       @httpGet("/")
       private indexAction(ctx: RouterContext, next: ()=> Promise<any>){
           ctx.body = "服务已经完成";
       }

}

export default IndexController;
