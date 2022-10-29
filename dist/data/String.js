"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmoString = void 0;
const CosmoType_1 = require("./base/CosmoType");
class CosmoString extends CosmoType_1.CosmoType {
    constructor() {
        super("string");
        this.emailRegex = new RegExp('/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/');
        this.uuidRegex = new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i");
        this.urlRegex = new RegExp("(http(s)?://.)?(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g");
    }
    required(value) {
        this.requiredProperty = value ?? true;
        return this;
    }
    length(value) {
        if (!value || typeof value !== "number") {
            throw new Error();
        }
        this.lengthProperty = value;
        return this;
    }
    min(value) {
        if (!value || typeof value !== "number")
            throw new Error();
        this.minProperty = value;
        return this;
    }
    max(value) {
        if (!value || typeof value !== "number")
            throw new Error();
        this.maxProperty = value;
        return this;
    }
    matches(regEx) {
        if (!regEx || !(regEx instanceof RegExp))
            throw new Error();
        this.matchesProperty = regEx;
        return this;
    }
    lowercase(value) {
        this.lowercaseProperty = value ?? true;
        return this;
    }
    uppercase(value) {
        this.uppercaseProperty = value ?? true;
        return this;
    }
    default(value) {
        if (!value || typeof value !== "string")
            throw new Error();
        this.defaultProperty = value;
        return this;
    }
    ensure(value) {
        this.ensureProperty = value ?? true;
        return this;
    }
    email() {
        this.typeProperty = "email";
        return this;
    }
    uuid() {
        this.typeProperty = "uuid";
        return this;
    }
    url() {
        this.typeProperty = "url";
        return this;
    }
    validate(value) {
        const dataType = this;
        if (!dataType.requiredProperty && !value && dataType.defaultProperty) {
            value = dataType.defaultProperty;
        }
        if (typeof value !== "string")
            throw new Error();
        if (dataType.requiredProperty &&
            dataType.requiredProperty === true &&
            !value) {
            throw new Error("Value is required");
        }
        else if (dataType.lowercaseProperty &&
            dataType.lowercaseProperty === true) {
            value = value.toLowerCase();
        }
        else if (dataType.uppercaseProperty &&
            dataType.uppercaseProperty === true) {
            value = value.toUpperCase();
        }
        if (dataType.ensureProperty && dataType.ensureProperty === true) {
            value = value.trim();
        }
        if (dataType.lengthProperty &&
            dataType.lengthProperty !== value.length) {
            throw new Error("Value length is not correct");
        }
        if (dataType.minProperty && dataType.minProperty > value.length) {
            throw new Error("Too less characters provided");
        }
        if (dataType.maxProperty && dataType.maxProperty < value.length) {
            throw new Error("Too many characters provided");
        }
        if (dataType.matchesProperty && !dataType.matchesProperty.test(value)) {
            throw new Error("Value does not match the provided Regex");
        }
        if (dataType.typeProperty &&
            dataType.typeProperty === "email" &&
            !dataType.emailRegex.test(value)) {
            throw new Error("Value does not match the provided Regex");
        }
        if (dataType.typeProperty &&
            dataType.typeProperty === "uuid" &&
            !dataType.uuidRegex.test(value)) {
            throw new Error("Value does not match the provided Regex");
        }
        if (dataType.typeProperty &&
            dataType.typeProperty === "url" &&
            !dataType.urlRegex.test(value)) {
            throw new Error("Value does not match the provided Regex");
        }
        return value;
    }
}
exports.CosmoString = CosmoString;
