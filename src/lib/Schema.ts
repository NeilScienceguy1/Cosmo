import { CosmoAny } from "../data/Any";
import { CosmoArray } from "../data/Array";
import { CosmoBoolean } from "../data/Boolean";
import { CosmoNumber } from "../data/Number";
import { CosmoObject } from "../data/Object";
import { CosmoString } from "../data/String";
import { CosmoDate } from "../data/Date";

export class CosmoSchema {
	dataType:
		| CosmoString
		| CosmoNumber
		| CosmoObject
		| CosmoArray
		| CosmoAny
		| CosmoBoolean
		| CosmoDate;
	private stringType:
		| "string"
		| "number"
		| "object"
		| "array"
		| "any"
		| "boolean"
		| "date";
	constructor(
		type:
			| CosmoString
			| CosmoNumber
			| CosmoObject
			| CosmoArray
			| CosmoAny
			| CosmoBoolean
			| CosmoDate
	) {
		this.dataType = type;
		this.stringType = type.type;
	}

	public validate(value: any) {
		return this.dataType.validate(value);
	}
}
