"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmoBoolean = void 0;
const CosmoType_1 = require("./base/CosmoType");
class CosmoBoolean extends CosmoType_1.CosmoType {
    constructor() {
        super("boolean");
    }
    default(value) {
        this.defaultProperty = value;
        return this;
    }
    validate(value) {
        if (this.defaultProperty && !value) {
            value = this.defaultProperty;
        }
        if (typeof value !== "boolean") {
            throw new TypeError("Value must be of type boolean");
        }
        return value;
    }
}
exports.CosmoBoolean = CosmoBoolean;
