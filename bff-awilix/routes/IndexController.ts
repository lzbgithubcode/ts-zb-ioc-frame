import {GET, route} from "awilix-koa";
import {Context} from 'koa'


@route("/")
class IndexController {
     @route("/")
     @GET()
     async actionIndex(ctx: Context){
          ctx.body = {
               data: "我是首页数据"
          }
     }
}
export default IndexController;
