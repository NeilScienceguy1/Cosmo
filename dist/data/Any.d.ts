import { CosmoType } from "./base/CosmoType";
export declare class CosmoAny extends CosmoType {
    prohibitedProperty?: string[];
    constructor();
    prohibited(value: string[]): this;
    validate(value: any): any;
}
