import "reflect-metadata";
import { container } from "tsyringe";
import HogeService from "./HogeService";


//こんな感じにトークに対して、Providerを登録ができる。

//2回も登録できるんや...
container.register("x", { useValue: "xです先" });
container.register("x", { useValue: "xです後" });

const hogeService = container.resolve(HogeService);

//最後のやつが注入されているようだ
console.log(hogeService.getX())

//両方とも
console.log(hogeService.getX2())