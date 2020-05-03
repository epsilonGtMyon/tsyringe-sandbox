import { injectable, inject } from "tsyringe";
import BarLogic, { keyBarLogic } from "../bar/BarLogic";


@injectable()
export default class FooService {

    constructor(
        @inject("mail") private mail: string,
        @inject(keyBarLogic) private barLogic: BarLogic,
    ) {

    }

    doService() {
        console.log(this.mail);
        console.log(this.barLogic.doBar());
    }
}