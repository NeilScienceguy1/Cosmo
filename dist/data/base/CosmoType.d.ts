export declare class CosmoType {
    type: "string" | "number" | "object" | "array" | "any" | "boolean" | "date";
    constructor(type: "string" | "number" | "object" | "array" | "any" | "boolean" | "date");
    validate(value: any): void;
}
