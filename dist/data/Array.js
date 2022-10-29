"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmoArray = void 0;
const CosmoType_1 = require("./base/CosmoType");
class CosmoArray extends CosmoType_1.CosmoType {
    constructor() {
        super("array");
    }
    length(value) {
        if (typeof value !== "number")
            throw new TypeError("Length must be a number");
        this.lengthProperty = value;
        return this;
    }
    max(value) {
        if (typeof value !== "number")
            throw new TypeError("Max must be a number");
        this.maxProperty = value;
        return this;
    }
    min(value) {
        if (typeof value !== "number")
            throw new TypeError("Min must be a number");
        this.minProperty = value;
        return this;
    }
    nonEmpty(value) {
        this.nonEmptyProperty = value ?? true;
        return this;
    }
    of(value) {
        this.dataTypeProperty = value;
        return this;
    }
    validate(value) {
        if (!Array.isArray(value)) {
            throw new TypeError("Value must be an array");
        }
        if (this.lengthProperty && value.length !== this.lengthProperty) {
            throw new TypeError(`Value must be of length ${this.lengthProperty}`);
        }
        if (this.maxProperty && value.length > this.maxProperty) {
            throw new TypeError(`Value must be less than ${this.maxProperty}`);
        }
        if (this.minProperty && value.length < this.minProperty) {
            throw new TypeError(`Value must be greater than ${this.minProperty}`);
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
exports.CosmoArray = CosmoArray;
