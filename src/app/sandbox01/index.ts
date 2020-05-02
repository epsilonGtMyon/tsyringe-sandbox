//Reflect API を使うためのPolyfill
import "reflect-metadata";
import { container } from "tsyringe";
import HogeService from "./HogeService";

const instance = container.resolve(HogeService);

console.log(instance.addHoge("aaa"))
console.log(instance.addHogeFoo("bbb"))