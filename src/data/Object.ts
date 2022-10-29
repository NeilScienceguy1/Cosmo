import { CosmoType } from "./base/CosmoType";

export class CosmoObject extends CosmoType {
	private keys: Map<string, any> = new Map();
	constructor(data: Object) {
		super("object");
		this.handleObjectData(data);
	}

	private handleObjectData(data: any) {
		for (var key in data) {
			var value = data[key];
			this.keys.set(key, value);
		}
	}

	public validate(value: any): void {
		if (typeof value === "object") {
			this.keys.forEach((val, key1) => {
				if (!Object.keys(value).includes(key1)) {
					value = {
						...value,
						[key1]: undefined,
					};
				}
			});
			for (var key in value) {
				var value1 = value[key];
				if (this.keys.get(key)) {
					const validatedValue = this.keys.get(key).validate(value1);
					if (validatedValue !== value1) {
						value = {
							...value,
							[key]: validatedValue,
						};
					}
				} else {
					throw new Error("Key not found");
				}
			}
			return value;
		} else {
			throw new Error("Object type is not an object");
		}
	}
}
