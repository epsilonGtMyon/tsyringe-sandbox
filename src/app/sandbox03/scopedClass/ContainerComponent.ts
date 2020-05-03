import { scoped, Lifecycle } from "tsyringe";


//ContainerScopedにするとコンテナ内でインスタンスが一つ作られるようだ
//singletonとは異なって子コンテナが登場したら、そこでも一つのインスタンスが作られるみたい

@scoped(Lifecycle.ContainerScoped)
export default class ContainerComponent {

    constructor() {
        console.log("new ContainerComponent()")
    }
}