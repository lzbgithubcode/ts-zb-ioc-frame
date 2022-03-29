/**
 * 作者: lzb
 * 日期: 2022-03-29 16:57
 * 功能:
 */
import {Container} from "inversify";
import {InversifyKoaServer, interfaces, TYPE} from "inversify-koa-utils";
import IndexController from "./routes/IndexController";
import "reflect-metadata";

// 1. 创建容器
const container = new Container();

// 绑定
container.bind<interfaces.Controller>(TYPE.Controller).to(IndexController).whenTargetNamed("IndexController");

// 2. 创建服务
const server = new InversifyKoaServer(container);
const app = server.build();

app.listen(3000, ()=>{
    console.log(`服务启动用成功http:localhost:3000`);
});


