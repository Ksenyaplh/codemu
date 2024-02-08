//79.1 синтаксическая
let arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length]);

//79.2 арифметическая
let arr = [1, 2, 3, 4, 5];
console.log(arr[1] + arr[2] + arr[3] + arr[4] + arr[5]);

//79.3 синтаксическая
let arr = {1, 2, 3, 4, 5};
console.log(arr.length]);

let arr = [1, 2, 3, 4, 5];
console.log(arr.length);

//79.4 синтаксическая
let arr = [1, 2, 3, 4, 5];
console.log(arr.lenght);

let arr = [1, 2, 3, 4, 5];
console.log(arr.length);

//103.1 синтаксическая
let obj = {x: 1, y: 2, z: 3};
console.log(obj[x]);

let obj = {x: 1, y: 2, z: 3};
console.log(obj.x);

//103.2 синтаксическая
let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj.key);

let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj[key]);

//103.3 синтаксическая
let obj = {x: 1, y: 2, z: 3};
let sum = obj[x] + obj[y] + obj[x];
console.log(obj);

let obj = {x: 1, y: 2, z: 3};
let sum = Number(obj.x) + Number(obj.y) + Number(obj.z);
console.log(sum);

//103.4 синтаксическая
let obj = {x: 1, y: 2, z: 3};
console.log(obj.length);

let obj = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj).length);

//141.1 синтаксическая
let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num1 = 1;
let num2 = 2;

if (num1 + num2 == 3) {
	console.log('+++');
} else {
	console.log('---');
}

//141.2 синтаксическая
let num1 = '1';
let num2 = '2';

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num1 = '1';
let num2 = '2';

if ((Number(num1) + Number(num2)) == 3) {
console.log('+++');
} else {
console.log('---');
}

//141.3 синтаксическая
let num1 = '1';
let num2 = '2';

if (Number(num1 + num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num1 = '1';
let num2 = '2';

if ((Number(num1) + Number(num2)) === 3) {
console.log('+++');
} else {
console.log('---');
}

//141.4 синтаксическая
let num = 123;

if (num[0] === 1) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 123;
let str = String(num);

if (str[0] == 1) {
console.log('+++');
} else {
console.log('---');
}

//141.5 синтаксическая
let num = 123;

if (String(num[0]) === 1) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 123;
let str = String(num);

if (str[0] == 1) {
console.log('+++');
} else {
console.log('---');
}

//141.6 синтаксичкая
let num = 123;

if (String(num)[0] === 1) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 123;

if (Number(String(num)[0]) == 1) {
console.log('+++');
} else {
console.log('---');
}

//141.7 синтаксическая
let num = 123;
let first = String(num)[0];

if (first === 1) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 123;
let first = String(num);

if (first[0] == 1) {
console.log('+++');
} else {
console.log('---');
}

//141.8 синтаксическая
let num = 12;

if (num.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;
let first = String(num);

if (first.length == 2) {
console.log('+++');
} else {
console.log('---');
}

//141.9 синтаксическая
let num = 12;
let str = Number(str);

if (str.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;
let str = String(num);

if (str.length === 2) {
console.log('+++');
} else {
console.log('---');
}

//141.10 синтаксическая
let num = 12;

if (String(num.length) === 2) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;
let str = String(num);

if (str.length === 2) {
console.log('+++');
} else {
console.log('---');
}

//141.11 синтаксическая
let num = 12;

if (String(num).length === String(2)) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;
let str = String(num);

if (str.length === 2) {
console.log('+++');
} else {
console.log('---');
}

//141.12 синтаксическая
let num = 12;

if (String(num).lenght === 2) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;
let str = String(num);

if (str.length === 2) {
console.log('+++');
} else {
console.log('---');
}

//141.13 синтаксическая
let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам

let sum1 = num[0] + num[1] + num[2];
let sum2 = num[3] + num[4] + num[5];

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}

let num = '123033'; 

let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

if (sum1 == sum2) {
console.log('суммы равны');
} else {
console.log('суммы не равны');
}

//166.1 логическая
for (let i = 0; i > 10; i++) {
	console.log(i);
}

//166.2 арифметическая
for (let i = 10; i > 0; i++) {
	console.log(i);
}

//166.3 логическая
for (let i = 10; i == 0; i--) {
	console.log(i);
}

//166.4 логическая
let i = 0;

while (i >= 10) {
	console.log(i);
	i++;
}

//166.5 синтаксическая?
let res;

for (let i = 1; i <= 10; i++) {
	res += i;
}

console.log(res);

//166.6 арифметическая
let res = 0;

for (let i = 1; i <= 10; i++) {
	res *= i;
}

console.log(res);

//167.7 синтаксическая
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += elem;
}

console.log(sum); // должно вывести 15

//167.8 синтаксическая
let arr = ['1', '2', '3', '4', '5'];
let sum = '';

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); // должно вывести 15

//167.9 синтаксическая
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum = +elem;
}

console.log(sum); // должно вывести 15

//167.10 синтаксическая
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i <= arr.length; i++) {
	sum += +arr[i];
}

console.log(sum); // почему-то выводит NaN

//167.11 синтаксическая ошибка
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length - 1; i++) {
	sum += +arr[i];
}

console.log(sum); // почему-то выводит не 15

//167.12 синтаксическая
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +i;
}

console.log(sum); // почему-то выводит не 15

//166.13 синтаксическая
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	elem = elem ** 2;
}

console.log(arr);

//166.14 синтаксическая
let arr;

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr);

//166.15 синтаксическая
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let elem in obj) {
	sum += elem;
}

console.log(sum);

//166.16 синтаксическая
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
	sum = +obj.key;
}

console.log(sum);

//166.17 синтаксическая
let arr = [1, 2, 3, 4, 5];
let res = '';

for (let elem of arr) {
	if (elem === 3) {
		res = '+++';
	} else {
		res = '---';
	}
}

console.log(res);

//166.18 синтаксическая
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr);

//166.19 логическая
let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
	if (elem === 3) {
		let res = true;
		break;
	}
}

console.log(res);

//166.20 логическая
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem % 2 = 0) {
		console.log(elem);
	}
}

//166.21 синтаксическая
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elem of arr) {
	if (elem % 2 != 0) {
		res.push(elem);
	}
}

console.log(res);

//199.1 синтаксическая
let num = 12345;
let arr = num.split('');

let sum = 0;
for (let digit of arr) {
	sum += digit;
}

console.log(sum);

//199.2 синтаксическая
let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum += digit;
}

console.log(sum);

//199.3 синтаксическая
let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum = Number(digit);
}

console.log(sum); // почему-то выводит 5, а не 15

//199.4 синтаксическая
let num = 12345;
let arr = String(num).split('');

let sum = '';
for (let digit of arr) {
	sum += Number(digit);
}

console.log(sum);

//199.5 арифметическая
let num = 12345;
let arr = String(num).split('');

let prod = 0;
for (let digit of arr) {
	prod *= digit;
}

console.log(prod);