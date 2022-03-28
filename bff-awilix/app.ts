import Koa from "koa";
import {createContainer, Lifetime} from "awilix";
import {loadControllers, scopePerRequest, } from "awilix-koa";




const app = new Koa();

// // 创建容器- 存放实例
const container = createContainer();
// 如果注入service, 且每个注入的service单例（Lifetime.SCOPED）
container.loadModules([`${__dirname}/services/*.ts`], {
    formatName: "camelCase",
    resolverOptions:{
        lifetime: Lifetime.SCOPED
    }
});

app.use(scopePerRequest(container));

app.use(loadControllers(`${__dirname}/routes/*.ts`));



const port = 8081;
app.listen(port, () => {
    console.log(`ioc服务启用成功 http://localhost:${port}`)
});
