import { injectable } from "tsyringe";
import ContainerComponent from "./scopedClass/ContainerComponent";
import ResolutionComponent from "./scopedClass/ResolutionComponent";


@injectable()
export default class ChildService {

    constructor(
        private container: ContainerComponent,
        private resolution: ResolutionComponent
    ) {
        console.log("new ChildService()")
    }
}