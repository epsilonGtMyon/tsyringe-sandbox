import { injectable, singleton } from "tsyringe";

//コンストラクタに依存パラメータがないので
//別に何もつけなくても、解決できるようだ
//singletonをつけておくと一つのインスタンスが再利用されるようだ

@injectable()
//@singleton()
export default class FooService {

    private static instanceCount = 0;
    public constructor() {
        FooService.instanceCount++;
        console.log(`FooService : ${FooService.instanceCount}`)
    }

    addFoo(value: string) {
        return `${value} : Foo!`
    }
}