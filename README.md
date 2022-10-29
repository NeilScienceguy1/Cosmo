# Cosmo.js

Cosmo.js is a schema validation library that validates your data based on parameters set by you. It supports a variety of data types, from strings to dates.

# Table of Contents 

- [Installation](#Installation)
- [Basic Usage](#basic-usage)
- [Get Started](#get-started)
- [Schemas](#schema)
- [Data Types](#data-types)
    - [String](#string)
    - [Number](#number)
    - [Boolean](#boolean)
    - [Date](#date)
    - [Array](#array)
    - [Object](#object)
    - [Any](#object)

# Installation

Install via NPM (Node Package Manager) or Yarn

```bash
npm install cosmo.js
yarn add cosmo.js
```

# Basic Usage 

```javascript
const { Cosmo, CosmoString } = require('cosmo.js');

const cosmo = new Cosmo();
const schema = cosmo.newSchema(new CosmoString().required().min(5).max(10));

schema.validate("Hello!!") // Output: Hello!!
schema.validate("Hi") // Output: Error: String must be at least 5 characters long
schema.validate(5) // Output: Error: Value must be a string
schema.validate() // Output: Error: Value is required
```

# Get Started

```javascript
const { Cosmo, CosmoString } = require('cosmo.js');

// Create a new Cosmo instance
const cosmo = new Cosmo();

// Create a new schema
const schema = cosmo.newSchema(new CosmoString().required().min(5).max(10)); 
// Mention your data type in schema, with the valid arguments
// Options - String, Number, Boolean, Date, Array, Object, Any

// Validate your data
schema.validate("Hello!!") // Output: Hello!!
```

# Data Types


## String

```javascript
const { Cosmo, CosmoString } = require("cosmo.js");

const cosmo = new Cosmo();

// Initialize new CosmoString instance
let str = new CosmoString()

str.default("Hello World"); // Specify a default value
str.email() // Validate if the string is an email
str.ensure(true) // Trims the string (Space at the beginning and end)
str.length(5) // Specify the length of the string
str.lowercase(true) // Converts to lowercase
str.uppercase(true) // Converts to uppercase
str.matches() // Specify a regex to match the string
str.max(5) // Specify Maximum number of characters
str.min(5) // Specify Minimum number of characters
str.required(true) // Specify if a value is required
str.url() // Validate if the string is a URL
str.uuid() // Validate if the string is a UUID

const schema = cosmo.newSchema(str)

console.log(
	schema.validate("Hello World") 
    // Outputs validated string after all necessary checks and changes
);
```

## Number

```javascript
const { Cosmo, CosmoNumber } = require("cosmo.js");

const cosmo = new Cosmo();

let num = new CosmoNumber()

num.default(7) // Specify a default value
num.absolute(true) // Converts to positive number
num.float(true) // Converts to float
num.greater(5) // Checks if number is greater than specified value
num.integer(true) // Checks if number is integer
num.less(7) // Checks if number is less than specified value
num.max(7) // Specify Maximum value
num.min(5) // Specify Minimum value
num.multipleOf(3) // Checks if number is multiple of specified value
num.natural(true) // Checks if number is natural
num.negative(false) // Checks if number is negative
num.port(false) // Checks if number is a port
num.precision(2) // Trims the number to the specified value of decimal places
num.required(true) // Checks if value is required
num.round(10) // Rounds to the nearest specified value
num.whole(true) // Checks if number is whole

const schema = cosmo.newSchema(num)

console.log(
	schema.validate(6.7678)
    // Outputs validated number after all necessary checks and changes
);
```


## Boolean

```javascript
const { Cosmo, CosmoBoolean } = require("cosmo.js");

const cosmo = new Cosmo();

let bool = new CosmoBoolean()

bool.default(true) // Specify a default value

const schema = cosmo.newSchema(bool)

console.log(
	schema.validate(false)
);
```


## Date

```javascript
const { Cosmo, CosmoDate } = require("cosmo.js");

const cosmo = new Cosmo();

let date = new CosmoDate()

date.now() // Specifies the default value to be now (if no value is provided)
date.format("locale") // Specify the format of the date
// "string" | "date" | "ISO" | "JSON" | "localeDate" | "locale" | "localeTime"

const schema = cosmo.newSchema(date)

console.log(
	schema.validate()
    // Outputs date in the specified format
);
```


## Array

```javascript
const { Cosmo, CosmoArray, CosmoString } = require("cosmo.js");

const cosmo = new Cosmo();

let arr = new CosmoArray()

arr.length(2) // Specifies length of Array
arr.max(5) // Specifies max length of Array
arr.min(1) // Specifies min length of Array
arr.nonEmpty(true) // Specifies if Array can be empty
arr.of(new CosmoString().min(5))
// Specifies the type of elements in Array (Can be left empty or set to CosmoAny)

const schema = cosmo.newSchema(arr)

console.log(
	schema.validate(["Hello", "World"])
    // Outputs validated Array after all necessary checks and changes
);
```


## Object

```javascript
const { Cosmo, CosmoObject, CosmoString, CosmoNumber, CosmoArray } = require("cosmo.js");

const cosmo = new Cosmo();

// Put your object schema as an argument
// Specify type of each key in object using Cosmo Data Types
let obj = new CosmoObject({
	name: new CosmoString().required(),
	age: new CosmoNumber().min(18),
	friends: new CosmoArray().of(new CosmoString()).nonEmpty()
})

const schema = cosmo.newSchema(obj)

console.log(
	schema.validate({
        name: "John",
        age: 21,
        friends: ["Jack", "Fred"]
    })
    // Outputs validated Object after all necessary checks and changes
);
```


## Any

```javascript
const { Cosmo, CosmoAny } = require("cosmo.js");

const cosmo = new Cosmo();

// Allows for any type of value
let any = new CosmoAny()

const schema = cosmo.newSchema(any)

console.log(
	schema.validate(false)
    // Outputs input value
);
```

# Authors

- [@NeilScienceguy1](https://www.github.com/NeilScienceguy1)

# Support

For support, [email me](mailto:neil.c1107@gmail.com) or contact me on [Twitter](https://twitter.com/NeilScienceguy1).
