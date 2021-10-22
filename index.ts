//Beginner

//Basic types

let var1 = "text"
const var2 = "text"
const var3: string = "text"

interface User {
    name: string
    age: number
}

const var5: User = {
    //@ts-ignore
    username: "Thomas",
    age: 20
}

//Compiling

//Functions

function func1(user: User): number {
    return 1
}

function func2(user: User): void {
}

function func3(user: User) {
}


//any

let var6: any

var6 = "Rubbish"

let var7: number = var6 //This is gonna 99% break

//unknown

let var8: unknown

var8 = "Rubbish"

let var9: string = var8 as string //Type casting

//arrays

let var10: Array<string>

var10 = ['Hello']

let var11: Array<{ name: string }>

var11 = [
    { name: "Robert" }
]

//Intermediate


// interface status1 = "ready" | "notReady" | "inProgress"

type Status1 = "ready" | "notReady" | "inProgress"

let var12: Status1 = "notReady"

type StringOrArray = string | Array<string>

function toArray(input: StringOrArray): Array<string> {
    //predicate - fancy way of saying true false
    if (typeof input === "string") {
        return [input]
    }
    return input
}

//never

type Status2 = string & number

//Optional variables

type User2 = {
    name: string
    age?: number
}

let var13: User2 = { name: "Thomas" }

const var14 = var13.age

const var15 = var13.age!

//Utility types
let fullUser: Required<User2>

fullUser = {
    name: "thomas",
    age: 5
}

let partialUser: Partial<User2>

partialUser = {}


//indexing
interface Users1 {
    [username: string]: User2
}

const users1: Users1 = {
    robert: {
        name: "Robert"
    }
}

//Pro

//Generics

// Array<>

function castToType<T>(obj1: any) {
    return obj1 as T
}

let result = castToType<string>("hello")

//Type inference

function returnSelf<T>(obj1: T) {
    return obj1
}

// let val1 = "Hello World"
let val1 = 34

const val2 = returnSelf(val1)

function createArray<T>(obj1: T, obj2: T): Array<T> {
    return [obj1, obj2]
}

const val3 = createArray("thomas", 42)


//type predicates

interface YoungUser {
    name: string
    age: number
}

interface OldUser {
    name: string
    age: number
}

function isOldUser(user: OldUser | YoungUser): user is OldUser {
    return user.age > 50
}

const newUser = {
    name: "Robertson",
    age: 51
}

if (isOldUser(newUser)) {
    newUser
}

//Module augmentation

import { SmallInterface } from "./small-interface"

const bigInterface: SmallInterface = {
    var1: 1,
    var2: 2,
    var3: 3
}

declare module './small-interface' {
    interface SmallInterface {
        var3: number
    }
}

//Types from types

//keyof
type Point = { x: number; y: string };
type P = keyof Point;
const var16: P = 'x'
const anothervar1: Point[keyof Point] = 1

//type by key
const var17: Point['x'] = 12

//LEFT OFF LEFT OFF LEFT OFF

//Conditional type
type checkString<T> = T extends 'string' ? string : any

const var18: checkString<'anything'> = 11

const var19: checkString<'string'> = 'This must be a string'

//Semi-witchcraft

//Template Literal Type

type Till10 = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
type Till100 = `${Till10}${Till10}`

//Type inference
type RemoveFirst4Digits<T> = T extends `${Till100}${Till100}${infer R}` ? R : never

let var20: RemoveFirst4Digits<"119112">

type GetFirstParamType<T> = T extends (arg1: infer Arg1) => any ? Arg1 : never

function log(var1: string) { }

let logParamType: GetFirstParamType<typeof log>

function log2(var1: string, var2: string) { }

//Spread syntax

type GetFirstParamTypeAnyNumArgs<T> = T extends (...arg1: infer Arg1) => any ? Arg1[0] : never

let logParamType2: GetFirstParamTypeAnyNumArgs<typeof log2>

//Witchcraft

//Recursion

type GetLastDigit<T> = T extends `${Till10}${infer LD}`
    ? GetLastDigit<LD> extends "" ?
    T :
    GetLastDigit<LD>
    : T

let var21: GetLastDigit<'01212121212121200122'>


//Equality checking

type IsEqualLousy<T, U> =
    T extends U ? (
        U extends T ? true : false
    ) : false

type X = IsEqualLousy<{ x: any }, { x: number }>;//true

//Kudos to the smart people on the internet
type IsEqual<T, U> =
    (<G>() => G extends T ? 1 : 2) extends
    (<G>() => G extends U ? 1 : 2)
    ? true
    : false;

type Y = IsEqual<{ x: any }, { x: number }>;//true



