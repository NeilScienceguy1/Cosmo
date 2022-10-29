"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cosmo = void 0;
const Schema_1 = require("./lib/Schema");
class Cosmo {
    constructor() {
        this.schemas = [];
    }
    newSchema(schemaType) {
        const schema = new Schema_1.CosmoSchema(schemaType);
        this.schemas.push(schema);
        return this;
    }
}
exports.Cosmo = Cosmo;
