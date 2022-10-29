import { CosmoType } from "./base/CosmoType";
import { CosmoNumber } from "./Number";
import { CosmoObject } from "./Object";
import { CosmoString } from "./String";
export declare class CosmoArray extends CosmoType {
    private lengthProperty?;
    private maxProperty?;
    private minProperty?;
    private nonEmptyProperty?;
    private dataTypeProperty?;
    constructor();
    length(value: number): this;
    max(value: number): this;
    min(value: number): this;
    nonEmpty(value?: boolean): this;
    of(value: CosmoString | CosmoNumber | CosmoObject): this;
    validate(value: any): any[];
}
