import { CosmoType } from "./base/CosmoType";

export class CosmoBoolean extends CosmoType {
    private defaultProperty?: boolean
	constructor() {
		super("boolean");
	}

    public default(value: boolean) {
        this.defaultProperty = value;
        return this;
    }


	public validate(value: any) {
        if (this.defaultProperty && !value) {
            value = this.defaultProperty
        }
        if (typeof value !== "boolean") {
            throw new TypeError("Value must be of type boolean");
        }
		return value;
	}
}
