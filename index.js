"use strict";
//Beginner
Object.defineProperty(exports, "__esModule", { value: true });
//Basic types
var var1 = "text";
var var2 = "text";
var var3 = "text";
var var5 = {
    //@ts-ignore
    username: "Thomas",
    age: 20
};
//Compiling
//Functions
function func1(user) {
    return 1;
}
function func2(user) {
}
function func3(user) {
}
//any
var var6;
var6 = "Rubbish";
var var7 = var6; //This is gonna 99% break
//unknown
var var8;
var8 = "Rubbish";
var var9 = var8; //Type casting
//arrays
var var10;
var10 = ['Hello'];
var var11;
var11 = [
    { name: "Robert" }
];
var var12 = "notReady";
function toArray(input) {
    //predicate - fancy way of saying true false
    if (typeof input === "string") {
        return [input];
    }
    return input;
}
var var13 = { name: "Thomas" };
var var14 = var13.age;
var var15 = var13.age;
//Utility types
var fullUser;
fullUser = {
    name: "thomas",
    age: 5
};
var partialUser;
partialUser = {};
var users1 = {
    robert: {
        name: "Robert"
    }
};
//Pro
//Generics
// Array<>
function castToType(obj1) {
    return obj1;
}
var result = castToType("hello");
//Type inference
function returnSelf(obj1) {
    return obj1;
}
// let val1 = "Hello World"
var val1 = 34;
var val2 = returnSelf(val1);
function createArray(obj1, obj2) {
    return [obj1, obj2];
}
var val3 = createArray("thomas", 42);
function isOldUser(user) {
    return user.age > 50;
}
var newUser = {
    name: "Robertson",
    age: 51
};
if (isOldUser(newUser)) {
    newUser;
}
var bigInterface = {
    var1: 1,
    var2: 2,
    var3: 3
};
var var16 = 'x';
var anothervar1 = 1;
//type by key
var var17 = 12;
var var18 = 11;
var var19 = 'This must be a string';
var var20;
function log(var1) { }
var logParamType;
function log2(var1, var2) { }
var logParamType2;
var var21;
