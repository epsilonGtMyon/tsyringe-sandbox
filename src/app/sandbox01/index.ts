//Reflect API を使うためのPolyfill
import "reflect-metadata";
import { container } from "tsyringe";
import FooService from "./FooService";
import HogeService from "./HogeService";
import AutoHogeService from "./AutoHogeService";

document.title = "injectableとか"

const fooService = container.resolve(FooService);
console.log(fooService.addFoo("aaaa"));

const hogeService = container.resolve(HogeService);
console.log(hogeService.addHoge("aaa"))
console.log(hogeService.addHogeFoo("bbb"))


const autoHogeService = new AutoHogeService();
console.log(autoHogeService.addHoge("autoA"))
console.log(autoHogeService.addHogeFoo("autoB"))
