import { CosmoType } from "./base/CosmoType";
export declare class CosmoString extends CosmoType {
    private requiredProperty?;
    private lengthProperty?;
    private minProperty?;
    private maxProperty?;
    private matchesProperty?;
    private lowercaseProperty?;
    private uppercaseProperty?;
    private defaultProperty?;
    private ensureProperty?;
    private typeProperty?;
    private emailRegex;
    private uuidRegex;
    private urlRegex;
    constructor();
    required(value?: boolean): this;
    length(value: number): this;
    min(value: number): this;
    max(value: number): this;
    matches(regEx: RegExp): this;
    lowercase(value?: boolean): this;
    uppercase(value?: boolean): this;
    default(value: string): this;
    ensure(value?: boolean): this;
    email(): this;
    uuid(): this;
    url(): this;
    validate(value: any): any;
}
