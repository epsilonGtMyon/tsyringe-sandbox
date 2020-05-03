import { injectable } from "tsyringe";
import FooService from "./FooService";

//もしinjectableをつけてないのFooServiceが解決できない
@injectable()
export default class HogeService {

    constructor(
        private fooService: FooService
    ) {
    }

    addHoge(value: string) {
        return `${value} : Hoge!`
    }

    addHogeFoo(value: string) {
        return this.fooService.addFoo(this.addHoge(value))
    }
}