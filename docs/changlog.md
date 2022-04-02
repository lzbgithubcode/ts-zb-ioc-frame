#### 2022-03-27
搭建整体IOC的服务

#### 2022-03-28 
完成基本的基于awilix的IOC服务
步骤：
* 1.创建容器`createContainer`
* 2. 往容器中注入服务, 依赖注入
```js
     // app.ts
    // 如果注入service, 且每个注入的service单例（Lifetime.SCOPED）
    container.loadModules([`${__dirname}/services/*.ts`], {
        formatName: "camelCase",
        resolverOptions:{
            lifetime: Lifetime.SCOPED
        }
    });
```
* 3. 使用的控制器中构建函数获取注入的实例, 不用导入依赖
```typescript
    // UserApiController.ts
    constructor({userService}: {userService: IUserAPI<IUserInfo>}) {
               this.userService = userService;
     }
     
      @route("/userInfo")
      @GET()
      async actionUserInfo(ctx: IRouterContext, next: ()=> void){
            const userInfo: IUserInfo  =  await this.userService.getUserInfo();
            ctx.body = this.getBodyData(userInfo);
      }
```


#### 2022-03-29 inversify的IOC架构搭建
* ts-node-dev  运行 ts文件
* typescript   ts文件
* inversify reflect-metadata  基础[inversify](https://github.com/inversify/InversifyJS)
* inversify-koa-utils  基于inversify + koa的封装



**使用inversify的步骤**
1. 声明interface和type
2. 使用 @injectable 和 @inject 装饰器声明依赖
3. 创建和配置容器
4. 解析依赖


#### 2022-03-31 自定义IOC





