import { injectable, inject, injectAll } from "tsyringe";

@injectable()
export default class HogeService {

    constructor(
        //インジェクション対象をトークンで指定することができる(interfaceや クラス以外の物を注入するときに使うようだ)
        //クラスを渡すとそれがインジェクションされている
        //トークンに指定できるのはシンボル、文字列、コンストラクタ関数
        @inject("x") private x: string,
        @injectAll("x") private x2: string
    ) {
    }

    getX() {
        return this.x;
    }
    
    getX2() {
        return this.x2;
    }
}