import BarLogic from "./BarLogic";
import { injectable } from "tsyringe";


@injectable()
export default class BarLogicImpl implements BarLogic {
    doBar() {
        return "bar";
    }
}