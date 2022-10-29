import { CosmoType } from "./base/CosmoType";

export class CosmoDate extends CosmoType {
    private formatProperty?: "date" | "ISO" | "JSON" | "localeDate" | "locale" | "localeTime" | "string"
    private nowProperty?: boolean = false;
	constructor() {
		super("date");
	}

    public format(value: "date" | "ISO" | "JSON" | "localeDate" | "locale" | "localeTime" | "string") {
        this.formatProperty = value
        return this;
    }

    public now(value?: boolean) {
        this.nowProperty = value ?? true;
        return this;
    }

	public validate(value: any) {
        if (!value && this.nowProperty) {
            value = new Date();
        }
        if (!value && !this.nowProperty) {
            throw new Error("Value must be of type Date");
        }
        if (Object.prototype.toString.call(value) !== "[object Date]") {
			throw new Error("Value must be of type Date");
		}
        if (this.formatProperty === "date") {
            value = value.toDateString();
        }
        if (this.formatProperty === "ISO") {
            value = value.toISOString();
        }
        if (this.formatProperty === "JSON") {
            value = value.toJSON();
        }
        if (this.formatProperty === "localeDate") {
            value = value.toLocaleDateString();
        }
        if (this.formatProperty === "locale") {
            value = value.toLocaleString();
        }
        if (this.formatProperty === "localeTime") {
            value = value.toLocaleTimeString();
        }
        if (this.formatProperty === "string") {
            value = value.toString();
        }
		return value;
	}
}