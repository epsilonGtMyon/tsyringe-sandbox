import { injectable } from "tsyringe";
import ContainerComponent from "./scopedClass/ContainerComponent";
import ResolutionComponent from "./scopedClass/ResolutionComponent";
import ChildService from "./ChildService";


@injectable()
export default class ParentService {

    constructor(
        private childService: ChildService,
        private container: ContainerComponent,
        private resolution: ResolutionComponent
    ) {
        console.log("new ParentService()")
    }
}