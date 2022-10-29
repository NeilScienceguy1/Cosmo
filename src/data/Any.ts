import { CosmoType } from "./base/CosmoType";

export class CosmoAny extends CosmoType {
    prohibitedProperty?: string[]
	constructor() {
		super("any");
	}

    prohibited(value: string[]) {
        value.forEach(val => {
            if (val === "string") {
                this.prohibitedProperty?.push("string");
            }
            if (val === "number") {
                this.prohibitedProperty?.push("number");
            }
            if (val === "object") {
                this.prohibitedProperty?.push("object");
            }
            if (val === "array") {
                this.prohibitedProperty?.push("object");
            }
        })
        return this;
    }

	public validate(value: any) {
        this.prohibitedProperty?.forEach(val => {
            if (typeof value === val) {
                throw new TypeError(`Value must not be of type ${val}`);
            }
        })
		return value;
	}
}
