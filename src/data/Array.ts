import { CosmoType } from "./base/CosmoType";
import { CosmoNumber } from "./Number";
import { CosmoObject } from "./Object";
import { CosmoString } from "./String";

export class CosmoArray extends CosmoType {
	private lengthProperty?: number;
	private maxProperty?: number;
	private minProperty?: number;
	private nonEmptyProperty?: boolean;
	private dataTypeProperty?: CosmoString | CosmoNumber | CosmoObject;
	constructor() {
		super("array");
	}

	public length(value: number) {
		if (typeof value !== "number")
			throw new TypeError("Length must be a number");
		this.lengthProperty = value;
		return this;
	}

	public max(value: number) {
		if (typeof value !== "number")
			throw new TypeError("Max must be a number");
		this.maxProperty = value;
		return this;
	}

	public min(value: number) {
		if (typeof value !== "number")
			throw new TypeError("Min must be a number");
		this.minProperty = value;
		return this;
	}

	public nonEmpty(value?: boolean) {
		this.nonEmptyProperty = value ?? true;
		return this;
	}

	public of(value: CosmoString | CosmoNumber | CosmoObject) {
		this.dataTypeProperty = value;
		return this;
	}

	public validate(value: any) {
		if (!Array.isArray(value)) {
			throw new TypeError("Value must be an array");
		}

		if (this.lengthProperty && value.length !== this.lengthProperty) {
			throw new TypeError(
				`Value must be of length ${this.lengthProperty}`
			);
		}

		if (this.maxProperty && value.length > this.maxProperty) {
			throw new TypeError(`Value must be less than ${this.maxProperty}`);
		}

		if (this.minProperty && value.length < this.minProperty) {
			throw new TypeError(
				`Value must be greater than ${this.minProperty}`
			);
		}

		if (this.nonEmptyProperty && value.length === 0) {
			throw new TypeError("Value must not be empty");
		}

		if (this.dataTypeProperty) {
			for (const item of value) {
				this.dataTypeProperty.validate(item);
			}
		}

		return value;
	}
}
