

let country = 'Australia';
let continent = 'Australia';
let population;
// let population = 39000000;
console.log("Country:", country)
console.log("Continent:", continent)
// console.log("Population: ", population)

console.log(null)
console.log(typeof null)
console.log(typeof continent)



// formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

let mMass = 78;
let mHeight = 1.69
let jMass = 92;
let jHeight = 1.95

mMass = 95;
mHeight = 1.88;
jMass = 85;
jHeight = 1.76;

let mBMI = mMass / mHeight ** 2;
let jBMI = jMass / jHeight ** 2;
const comp = mBMI > jBMI

console.log(mBMI, jBMI, comp)

firstName = 'Emily'
emo = 'hate'
const line = `My name is ${firstName}, and I ${emo} food.`;
console.log(line)


console.log(`String with
multiple
lines`)

console.log(23 - 3 + '0')
console.log('-23' > 0)

let n = 1 + '1'    // 11
n = n - 1
console.log(n)

console.log(Boolean('0' - 0))