"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmoObject = void 0;
const CosmoType_1 = require("./base/CosmoType");
class CosmoObject extends CosmoType_1.CosmoType {
    constructor(data) {
        super("object");
        this.keys = new Map();
        this.handleObjectData(data);
    }
    handleObjectData(data) {
        for (var key in data) {
            var value = data[key];
            this.keys.set(key, value);
        }
    }
    validate(value) {
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
                }
                else {
                    throw new Error("Key not found");
                }
            }
            return value;
        }
        else {
            throw new Error("Object type is not an object");
        }
    }
}
exports.CosmoObject = CosmoObject;
