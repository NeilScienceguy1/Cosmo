"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmoDate = void 0;
const CosmoType_1 = require("./base/CosmoType");
class CosmoDate extends CosmoType_1.CosmoType {
    constructor() {
        super("date");
        this.nowProperty = false;
    }
    format(value) {
        this.formatProperty = value;
        return this;
    }
    now(value) {
        this.nowProperty = value ?? true;
        return this;
    }
    validate(value) {
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
exports.CosmoDate = CosmoDate;
