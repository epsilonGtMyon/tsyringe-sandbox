import "reflect-metadata";
import { container } from "tsyringe";
import ParentService from "./ParentService";


console.log("parentService1回目")
container.resolve(ParentService);

console.log("parentService2回目")
container.resolve(ParentService);