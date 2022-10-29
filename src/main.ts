import { CosmoString } from "./data/String";
import { CosmoNumber } from "./data/Number";
import { CosmoDate } from "./data/Date";
import { CosmoObject } from "./data/Object";
import { CosmoBoolean } from "./data/Boolean";
import { CosmoArray } from "./data/Array";
import { CosmoAny } from "./data/Any";
import { CosmoSchema } from "./lib/Schema";

export class Cosmo {
	schemas: CosmoSchema[];
	constructor() {
		this.schemas = [];
	}

	public newSchema(schemaType: CosmoString | CosmoAny | CosmoNumber | CosmoDate | CosmoObject | CosmoBoolean | CosmoArray) {
		const schema = new CosmoSchema(schemaType);
		this.schemas.push(schema);
		return this;
	}
}
