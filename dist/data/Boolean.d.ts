import { CosmoType } from "./base/CosmoType";
export declare class CosmoBoolean extends CosmoType {
    private defaultProperty?;
    constructor();
    default(value: boolean): this;
    validate(value: any): boolean;
}
