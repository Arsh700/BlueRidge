// var obj = {
// name:"Arsath",
// Age:24,
// address:{Temp:{
//   street:"Umar street",
//   Districk:"Nagai",
//   Pincode:609703
// },Permanent:{
//   Door_No:"58/13",
//   street:"Umar street",
// Districk:"Nagai",
// Pincode:609703
// }}

// }

// const {address} = obj;
// const {Permanent}=address;
// console.log(Permanent.Pincode)

// var array=[1,2,3,4,6,7];

// const [a,,b,...rest] = array;
// console.log(a,b,rest)

function calculate(a, b) {
	const add = a + b;
	const subtract = a - b;
	const multiply = a * b;
	const divide = a / b;

	return [add, subtract, multiply, divide];
}

console.log(calculate(4, 7));

var check = [1, 2, 3, 4];

for (const key in check) {
	if (check[key]) {
		console.log(check[key]);
	}
}
var name = "Arsath";
for (const iterator of name) {
	console.log(iterator);
}

var t = [123456];
var e = [74195];
const w = [...t, ...e];
console.log(w);
