import { CosmoType } from "./base/CosmoType";

export class CosmoNumber extends CosmoType {
	private minProperty?: number;
	private maxProperty?: number;
	private multipleOfProperty?: number;
	private integerProperty?: boolean;
	private naturalProperty?: boolean;
	private wholeProperty?: boolean;
	private negativeProperty?: boolean;
	private greaterProperty?: number;
	private lessProperty?: number;
	private precisionProperty?: number;
	private portProperty?: boolean;
	private absoluteProperty?: boolean;
	private floatProperty?: boolean;
	private roundProperty?: number;
	private requiredProperty?: boolean;
	private defaultProperty?: number;
	constructor() {
		super("number");
	}

	public min(value: number) {
		if (!value || typeof value !== "number") throw new Error();
		this.minProperty = value;
		return this;
	}

	public max(value: number) {
		if (!value || typeof value !== "number") throw new Error();
		this.maxProperty = value;
		return this;
	}

	public multipleOf(value: number) {
		if (!value || typeof value !== "number") throw new Error();
		this.multipleOfProperty = value;
		return this;
	}

	public integer(value?: boolean) {
		this.integerProperty = value ?? true;
		return this;
	}

	public natural(value?: boolean) {
		this.naturalProperty = value ?? true;
		return this;
	}

	public whole(value?: boolean) {
		this.wholeProperty = value ?? true;
		return this;
	}

	public negative(value?: boolean) {
		this.negativeProperty = value ?? true;
		return this;
	}

	public greater(value: number) {
		if (!value || typeof value !== "number") throw new Error();
		this.greaterProperty = value;
		return this;
	}

	public less(value: number) {
		if (!value || typeof value !== "number") throw new Error();
		this.lessProperty = value;
		return this;
	}

	public precision(value: number) {
		if (!value || typeof value !== "number") throw new Error();
		this.precisionProperty = value;
		return this;
	}

	public port(value?: boolean) {
		this.portProperty = value ?? true;
		return this;
	}

	public absolute(value?: boolean) {
		this.absoluteProperty = value ?? true;
		return this;
	}

	public float(value?: boolean) {
		this.floatProperty = value ?? true;
		return this;
	}

	public round(value: number) {
		if (!value || typeof value !== "number") throw new Error();
		this.roundProperty = value;
		return this;
	}

	public required(value?: boolean) {
		this.requiredProperty = value ?? true;
		return this;
	}

	public default(value: number) {
		if (!value || typeof value !== "number") throw new Error();
		this.defaultProperty = value;
		return this;
	}

	public validate(value: any) {
		const dataType = this;
		if (!value && dataType.defaultProperty) {
			value = dataType.defaultProperty;
		}
		if (
			dataType.requiredProperty &&
			dataType.requiredProperty === true &&
			!value
		) {
			throw new Error("Value is required");
		}
		if (typeof value !== "number") {
			throw new Error("Value is not a number");
		}

		if (dataType.precisionProperty) {
			let stringNum = value.toString();
			let decimalIndex = stringNum.indexOf(".");
			if (decimalIndex !== -1) {
				stringNum = stringNum.substring(
					0,
					decimalIndex + dataType.precisionProperty
				);
				value = parseFloat(stringNum);
			}
		}
		if (dataType.roundProperty) {
			value =
				Math.round(value * dataType.roundProperty) /
				dataType.roundProperty;
		}
		if (dataType.absoluteProperty) {
			value = Math.abs(value);
		}
		if (dataType.minProperty && value < dataType.minProperty)
			throw new Error("Number too small");
		if (dataType.maxProperty && value > dataType.maxProperty)
			throw new Error("Number too large");
		if (
			dataType.multipleOfProperty &&
			value % dataType.multipleOfProperty !== 0
		)
			throw new Error(
				`Number not a multiple of ${dataType.multipleOfProperty}`
			);
		if (
			dataType.integerProperty &&
			dataType.integerProperty === true &&
			value % 1 !== 0
		)
			throw new Error("Number not an integer");
		if (dataType.naturalProperty && dataType.naturalProperty === true) {
			if (value % 1 !== 0 || value < 1) {
				throw new Error("Number not natural");
			}
		}
		if (dataType.wholeProperty && dataType.wholeProperty === true) {
			if (value % 1 !== 0 || value < 0) {
				throw new Error("Number not whole");
			}
		}
		if (
			dataType.negativeProperty &&
			dataType.negativeProperty === true &&
			value >= 0
		)
			throw new Error("Number not negative");
		if (dataType.greaterProperty && value <= dataType.greaterProperty)
			throw new Error(
				`Number not greater than ${dataType.greaterProperty}`
			);
		if (dataType.lessProperty && value >= dataType.lessProperty)
			throw new Error(`Number greater than ${dataType.lessProperty}`);
		if (
			dataType.portProperty &&
			dataType.portProperty === true &&
			(value < 0 || value > 65535)
		)
			throw new Error("Number not a port");
		if (
			dataType.floatProperty &&
			dataType.floatProperty === true &&
			value % 1 === 0
		)
			throw new Error("Number not a float");

		return value;
	}
}
