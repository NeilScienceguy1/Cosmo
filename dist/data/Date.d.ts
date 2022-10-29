import { CosmoType } from "./base/CosmoType";
export declare class CosmoDate extends CosmoType {
    private formatProperty?;
    private nowProperty?;
    constructor();
    format(value: "date" | "ISO" | "JSON" | "localeDate" | "locale" | "localeTime" | "string"): this;
    now(value?: boolean): this;
    validate(value: any): any;
}
