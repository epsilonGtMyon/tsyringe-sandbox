import { autoInjectable } from "tsyringe";
import FooService from "./FooService";


//autoInjectable を使うとnew するときに注入してくれるみたい
@autoInjectable()
export default class AutoHogeService {

    constructor(
        // ?にしておかないとnew AutoHogeService() コンパイルエラーになる
        private fooService?: FooService
    ) {
    }

    addHoge(value: string) {
        return `${value} : Hoge!`
    }

    addHogeFoo(value: string) {
        return this.fooService!.addFoo(this.addHoge(value))
    }
}