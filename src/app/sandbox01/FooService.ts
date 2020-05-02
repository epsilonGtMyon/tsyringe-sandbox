import { injectable } from "tsyringe";

@injectable()
export default class FooService {

    addFoo(value: string) {
        return `${value} : Foo!`
    }
}