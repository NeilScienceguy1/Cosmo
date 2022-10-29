"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmoAny = void 0;
const CosmoType_1 = require("./base/CosmoType");
class CosmoAny extends CosmoType_1.CosmoType {
    constructor() {
        super("any");
    }
    prohibited(value) {
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
        });
        return this;
    }
    validate(value) {
        this.prohibitedProperty?.forEach(val => {
            if (typeof value === val) {
                throw new TypeError(`Value must not be of type ${val}`);
            }
        });
        return value;
    }
}
exports.CosmoAny = CosmoAny;
