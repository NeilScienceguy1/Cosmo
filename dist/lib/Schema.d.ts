import { CosmoAny } from "../data/Any";
import { CosmoArray } from "../data/Array";
import { CosmoBoolean } from "../data/Boolean";
import { CosmoNumber } from "../data/Number";
import { CosmoObject } from "../data/Object";
import { CosmoString } from "../data/String";
import { CosmoDate } from "../data/Date";
export declare class CosmoSchema {
    dataType: CosmoString | CosmoNumber | CosmoObject | CosmoArray | CosmoAny | CosmoBoolean | CosmoDate;
    private stringType;
    constructor(type: CosmoString | CosmoNumber | CosmoObject | CosmoArray | CosmoAny | CosmoBoolean | CosmoDate);
    validate(value: any): any;
}
