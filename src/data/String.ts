import { CosmoType } from "./base/CosmoType";

export class CosmoString extends CosmoType {
	private requiredProperty?: boolean;
	private lengthProperty?: number;
	private minProperty?: number;
	private maxProperty?: number;
	private matchesProperty?: RegExp;
	private lowercaseProperty?: boolean;
	private uppercaseProperty?: boolean;
	private defaultProperty?: string;
	private ensureProperty?: boolean;
	private typeProperty?: "email" | "uuid" | "url";
	private emailRegex: RegExp = new RegExp(
		'/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'
	);
	private uuidRegex: RegExp = new RegExp(
		"^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i"
	);
	private urlRegex: RegExp = new RegExp(
		"(http(s)?://.)?(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g"
	);
	constructor() {
		super("string");
	}

	public required(value?: boolean) {
		this.requiredProperty = value ?? true;
		return this;
	}

	public length(value: number) {
		if (!value || typeof value !== "number") {
			throw new Error();
		}
		this.lengthProperty = value;
		return this;
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

	public matches(regEx: RegExp) {
		if (!regEx || !(regEx instanceof RegExp)) throw new Error();
		this.matchesProperty = regEx;
		return this;
	}

	public lowercase(value?: boolean) {
		this.lowercaseProperty = value ?? true;
		return this;
	}

	public uppercase(value?: boolean) {
		this.uppercaseProperty = value ?? true;
		return this;
	}

	public default(value: string) {
		if (!value || typeof value !== "string") throw new Error();
		this.defaultProperty = value;
		return this;
	}

	public ensure(value?: boolean) {
		this.ensureProperty = value ?? true;
		return this;
	}

	public email() {
		this.typeProperty = "email";
		return this;
	}

	public uuid() {
		this.typeProperty = "uuid";
		return this;
	}

	public url() {
		this.typeProperty = "url";
		return this;
	}

	public validate(value: any) {
		const dataType = this;
		if (!dataType.requiredProperty && !value && dataType.defaultProperty) {
			value = dataType.defaultProperty;
		}
		if (typeof value !== "string") throw new Error();

		if (
			dataType.requiredProperty &&
			dataType.requiredProperty === true &&
			!value
		) {
			throw new Error("Value is required");
		} else if (
			dataType.lowercaseProperty &&
			dataType.lowercaseProperty === true
		) {
			value = value.toLowerCase();
		} else if (
			dataType.uppercaseProperty &&
			dataType.uppercaseProperty === true
		) {
			value = value.toUpperCase();
		}

		if (dataType.ensureProperty && dataType.ensureProperty === true) {
			value = value.trim();
		}

		if (
			dataType.lengthProperty &&
			dataType.lengthProperty !== value.length
		) {
			throw new Error("Value length is not correct");
		}

		if (dataType.minProperty && dataType.minProperty > value.length) {
			throw new Error("Too less characters provided");
		}

		if (dataType.maxProperty && dataType.maxProperty < value.length) {
			throw new Error("Too many characters provided");
		}

		if (dataType.matchesProperty && !dataType.matchesProperty.test(value)) {
			throw new Error("Value does not match the provided Regex");
		}

		if (
			dataType.typeProperty &&
			dataType.typeProperty === "email" &&
			!dataType.emailRegex.test(value)
		) {
			throw new Error("Value does not match the provided Regex");
		}

		if (
			dataType.typeProperty &&
			dataType.typeProperty === "uuid" &&
			!dataType.uuidRegex.test(value)
		) {
			throw new Error("Value does not match the provided Regex");
		}

		if (
			dataType.typeProperty &&
			dataType.typeProperty === "url" &&
			!dataType.urlRegex.test(value)
		) {
			throw new Error("Value does not match the provided Regex");
		}

		return value;
	}
}
