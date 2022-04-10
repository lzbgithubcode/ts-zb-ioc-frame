/**
 * 作者: lzb
 * 日期: 2022-04-02 14:16
 * 功能:
 */
import "reflect-metadata";
import {interfaces} from "./interfaces";
import {parseScript} from "esprima";
import  {Pattern} from "estree";
import {TAGS} from "./TestService";


/**
 *  类注入元数据
 */
export function iocController<T extends interfaces.TConstructor>(constructor: T) {
   class SubController extends  constructor{
       constructor(...args: any[]) {
           super(...args);
           const _params = __getFunctionParam(constructor);

           // 遍历参数增加到子控制器
           let identify: string;
           for (identify of _params){
               if(this.hasOwnProperty(identify)){
                   // 获取值
                   this[identify] = Reflect.getMetadata(TAGS[identify], constructor);
               }
           }

       }
   }
   return SubController;
}


/**
 * 获取函数的参数
 * @param fn
 * @private
 */
function __getFunctionParam(fn: Function): string[] {
    const ast = parseScript(fn.toString());
    const bodyNode = ast.body[0];
    let params: Pattern[] = [];
    if(bodyNode.type === 'FunctionDeclaration'){
        params = bodyNode.params;
    }
    let paramsNames: string[] = [];
    params.map((obj: Pattern)=>{
         paramsNames.push((obj as any).name)
    });

    return paramsNames;
}





