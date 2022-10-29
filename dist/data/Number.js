"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmoNumber = void 0;
const CosmoType_1 = require("./base/CosmoType");
class CosmoNumber extends CosmoType_1.CosmoType {
    constructor() {
        super("number");
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
    multipleOf(value) {
        if (!value || typeof value !== "number")
            throw new Error();
        this.multipleOfProperty = value;
        return this;
    }
    integer(value) {
        this.integerProperty = value ?? true;
        return this;
    }
    natural(value) {
        this.naturalProperty = value ?? true;
        return this;
    }
    whole(value) {
        this.wholeProperty = value ?? true;
        return this;
    }
    negative(value) {
        this.negativeProperty = value ?? true;
        return this;
    }
    greater(value) {
        if (!value || typeof value !== "number")
            throw new Error();
        this.greaterProperty = value;
        return this;
    }
    less(value) {
        if (!value || typeof value !== "number")
            throw new Error();
        this.lessProperty = value;
        return this;
    }
    precision(value) {
        if (!value || typeof value !== "number")
            throw new Error();
        this.precisionProperty = value;
        return this;
    }
    port(value) {
        this.portProperty = value ?? true;
        return this;
    }
    absolute(value) {
        this.absoluteProperty = value ?? true;
        return this;
    }
    float(value) {
        this.floatProperty = value ?? true;
        return this;
    }
    round(value) {
        if (!value || typeof value !== "number")
            throw new Error();
        this.roundProperty = value;
        return this;
    }
    required(value) {
        this.requiredProperty = value ?? true;
        return this;
    }
    default(value) {
        if (!value || typeof value !== "number")
            throw new Error();
        this.defaultProperty = value;
        return this;
    }
    validate(value) {
        const dataType = this;
        if (!value && dataType.defaultProperty) {
            value = dataType.defaultProperty;
        }
        if (dataType.requiredProperty &&
            dataType.requiredProperty === true &&
            !value) {
            throw new Error("Value is required");
        }
        if (typeof value !== "number") {
            throw new Error("Value is not a number");
        }
        if (dataType.precisionProperty) {
            let stringNum = value.toString();
            let decimalIndex = stringNum.indexOf(".");
            if (decimalIndex !== -1) {
                stringNum = stringNum.substring(0, decimalIndex + dataType.precisionProperty);
                value = parseFloat(stringNum);
            }
        }
        if (dataType.roundProperty) {
            value =
                Math.round(value * dataType.roundProperty) /
                    dataType.roundProperty;
        }
        if (dataType.absoluteProperty) {
            value = Math.abs(value);
        }
        if (dataType.minProperty && value < dataType.minProperty)
            throw new Error("Number too small");
        if (dataType.maxProperty && value > dataType.maxProperty)
            throw new Error("Number too large");
        if (dataType.multipleOfProperty &&
            value % dataType.multipleOfProperty !== 0)
            throw new Error(`Number not a multiple of ${dataType.multipleOfProperty}`);
        if (dataType.integerProperty &&
            dataType.integerProperty === true &&
            value % 1 !== 0)
            throw new Error("Number not an integer");
        if (dataType.naturalProperty && dataType.naturalProperty === true) {
            if (value % 1 !== 0 || value < 1) {
                throw new Error("Number not natural");
            }
        }
        if (dataType.wholeProperty && dataType.wholeProperty === true) {
            if (value % 1 !== 0 || value < 0) {
                throw new Error("Number not whole");
            }
        }
        if (dataType.negativeProperty &&
            dataType.negativeProperty === true &&
            value >= 0)
            throw new Error("Number not negative");
        if (dataType.greaterProperty && value <= dataType.greaterProperty)
            throw new Error(`Number not greater than ${dataType.greaterProperty}`);
        if (dataType.lessProperty && value >= dataType.lessProperty)
            throw new Error(`Number greater than ${dataType.lessProperty}`);
        if (dataType.portProperty &&
            dataType.portProperty === true &&
            (value < 0 || value > 65535))
            throw new Error("Number not a port");
        if (dataType.floatProperty &&
            dataType.floatProperty === true &&
            value % 1 === 0)
            throw new Error("Number not a float");
        return value;
    }
}
exports.CosmoNumber = CosmoNumber;
