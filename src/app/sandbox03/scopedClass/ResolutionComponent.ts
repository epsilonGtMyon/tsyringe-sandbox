import { scoped, Lifecycle } from "tsyringe";

//ResolutionScopedにすると
//1Resolveの要求の区間は１つのインスタンスが使いまわされる

@scoped(Lifecycle.ResolutionScoped)
export default class ResolutionComponent {

    constructor() {
        console.log("new ResolutionComponent()")
    }
}