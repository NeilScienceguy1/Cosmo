export class CosmoType {
    type:"string" | "number" | "object" | "array" | "any" | "boolean" | "date"
    constructor(type: "string" | "number" | "object" | "array" | "any" | "boolean" | "date") {
        this.type = type;
    }

    public validate(value: any) {

    }
}