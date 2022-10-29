import { CosmoType } from "./base/CosmoType";
export declare class CosmoObject extends CosmoType {
    private keys;
    constructor(data: Object);
    private handleObjectData;
    validate(value: any): void;
}
