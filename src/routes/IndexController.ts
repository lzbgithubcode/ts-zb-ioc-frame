import {GET, route} from "awilix-koa";
import {Context} from 'koa'

@route("/")
class IndexController {
     @route("/")
     @GET()
     async actionIndex(ctx: Context){
          ctx.body = {
              data: "你好吗，我是一个服务"
          }
     }
}
export default IndexController;