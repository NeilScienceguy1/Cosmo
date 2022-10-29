"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmoSchema = void 0;
class CosmoSchema {
    constructor(type) {
        this.dataType = type;
        this.stringType = type.type;
    }
    validate(value) {
        return this.dataType.validate(value);
    }
}
exports.CosmoSchema = CosmoSchema;
