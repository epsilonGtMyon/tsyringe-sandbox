import "reflect-metadata";
import { container } from "tsyringe";
import { keyBarLogic } from "./bar/BarLogic"
import BarLogicImpl from "./bar/BarLogicmpl";

import FooService from "./foo/FooService";

container.register("mail", {useValue: "hogehoge@localhost"})
container.register(keyBarLogic, { useClass: BarLogicImpl })

const fooService = container.resolve(FooService);
fooService.doService()
