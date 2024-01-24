//144.1
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
	console.log(elem);
}

//145.1
let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	console.log(key);
}

//145.2
let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	console.log(obj[key]); 
}

//146.1
let i = 1;

while (i <= 100) {
	console.log(i);
	i++;
}

//146.2
let i = 11;

while (i <= 33) {
	console.log(i);
	i++;
}

//146.3
let num = 20;

while (num < 1000) {
	num = num * 3;
}

console.log(num);

//147.1
for (let i = 1; i <= 100; i++) {
	console.log(i); 
}

//147.2
for (let i = 11; i <= 33; i++) {
	console.log(i); 
}

//147.3
for (let i = 2; i <= 100; i += 2) {
	console.log(i); 
}

//147.4
for (let i = 1; i <= 99; i += 2) {
	console.log(i); 
}

//147.5
for (let i = 100; i > 0; i--) {
	console.log(i); 
}

//148.1
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i <= arr.length - 1; i++) {
	console.log(arr[i]);
}

//148.2
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i <= arr.length - 2; i++) {
	console.log(arr[i]);
}

//148.3
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i]);
}

//148.4
let arr = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i <= arr.length - 1; i++) {
	console.log(arr[i]);
}

//149.1
let arr = [2, 5, 9, 15, 1, 4];
for (let elem of arr) {
	if (elem > 3 && elem < 10) {
		console.log(elem);
	}
}

//149.2
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let key in obj) {
	if (obj[key] % 2 === 1) {
		console.log(obj[key]);
	}
}

//150.1
let res = 0;

for (let i = 2; i <= 100; i += 2) {
	res = res + i;
}

console.log(res); 

//150.2
let res = 0;

for (let i = 1; i <= 100; i += 2) {
	res = res + i;
}

console.log(res); 

//150.3
let res = 1;

for (let i = 1; i <= 20; i++) {
	res = res * i;
}

console.log(res); 

//151.1
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let elem of arr) {
	res += elem;
}

console.log(res);

//151.2
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let i = 2; i <= 100; i += 2) {
	res += i;
}

console.log(res);

//152.1
let str = '';

for (let i = 0; i < 5; i++) {
	str += '-';
}

console.log(str);

//152.2
let str = '';

for (let i = 1; i <= 9; i++) {
	str += i;
}

console.log(str);

//152.3
let str = '';

for (let i = 9; i >= 1; i--) {
	str += i;
}

console.log(str);

//167.1
let i = 1;

while (i <= 100) {
	console.log(i);
	i++;
}

//167.2
for (let i = 100; i > 0; i--) {
	console.log(i); 
}

//167.3
for (let i = 2; i <= 100; i += 2) {
	console.log(i); 
}

//167.4
let arr = [];
let str = "x";
for (let i = 0;i<=10; i++){
    arr.push(str);
}
console.log(arr);

//167.5
let arr = [];
for (let i = 0;i<=10; i++){
    arr.push(i);
}
console.log(arr);

//167.6
let arr = [1, 4, 6, 8, 51, 98, 25, 81];
for (let elem of arr) {
    if (elem > 0 && elem <= 10) {
        console.log(elem);
    }
}

//167.7
let arr = [1, 4, 6, 8, 51, 98, 25, 81];
for (let elem of arr) {
    if (elem == 5) {
    console.log(elem);
    }
}

//167.8
let arr = [1, 4, 6, 8, 51, 98, 25, 81];
let res = 0;

for (let elem of arr) {
	res += elem;
}

console.log(res);

//167.9
let arr = [1, 4, 6, 8, 51, 98, 25, 81];
let res = 0;
let res1 = 0;
for (let elem of arr) {
    res1 = elem**2;
    res = res + res1;
}
console.log(res)

//167.10
let arr = [1, 4, 6, 8, 51, 98, 25, 81];
let res = 0;
for (let elem of arr) {
	res += elem;
}
res = res / arr.length;
console.log(res)

//167.11
let arr = [1, 4, 6, 8, 51, 98, 25, 81];
let res = 1;
for (let elem of arr) {
    res = res * elem;
}
console.log(res);

//167.12
let arr = [];
for (let i = 10; i >= 1; i--){
    arr.push(i);
}
console.log(arr);

//167.13
let arr = [1, -4, 6, -8, -51, -98, 25, -81];
let res = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
        res += arr[i];
    }
}
console.log(res);

//167.14
let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
	let num = String(arr[i]);
	let check = num[0];
	if (check == 1  check == 2  check == 5) {
	  console.log(num);
	}
  }

//167.15
let arr = [10, 20, 30, 50, 235, 3000];
for (i = arr.length-1; i>=0 ; i--) {
    console.log(arr[i]);
}
 
//167.16
let arr = [1, 4, 2, 8, 51, 98, 6, 81];

for (let i = 0; i <= arr.length - 1; i++) {
  let arrEl = arr[i];
  if (arrEl === i) {
    console.log(arr[i]);
  }
}

//167.17
let arr = [1, 4, 2, 8, 51, 98, 6, 81];

for (let i = 0; i <= arr.length-1; i++) {
	document.write(arr[i] + '<br>');
}

//167.18
let arr = [1, 4, 2, 8, 51, 98, 6, 81];

for (let i = 0; i <= arr.length-1; i++) {
	document.write(arr[i] + '<br>');
}

//167.19
let arr = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let week = '';

for (let i = 0; i <= arr.length-3; i++) {
	week += arr[i] + ' ';
}
document.write(week + '<b>' + 'Saturday' + '</b>' + '<b>' + 'Sunday' + '</b>');

//167.20
let day = 'ср';
let arr = ['пн','вт','ср','чт','пт','сб','вс',];

for (let i = 0; i < 1; i++){
    for (let elem of arr){
    if (elem == day){
              document.write('<i>' + elem + '</i>')
        }
    document.write(elem + '<br>')  
    }
}

//167.21
let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
	};

for (let key in obj) {
	str = obj[key] + obj[key] * 0.1;
	console.log(str);
	}

//167.22
let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
  };
  
  for (let key in obj){
	  if (obj[key] >= 400){
	  str = obj[key] + obj[key] * 0.1;
	console.log('Увеличенные зарплаты:' + '<br>');
	  console.log('<br>' + str);
	  }
  }

//167.23
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr = {};
for (let i = 0; i < arr1.length; i++) {
    let key = arr1[i];
    arr[key] = arr2[i];
}
console.log(arr)

//167.24
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sum = 0;
let sum2 = 0;

for (let key in obj) {
sum += Number(key);
sum2 += Number(obj[key]);
}
console.log(sum/sum2);

//167.25
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr1 = [];
let arr2 = [];

for (let key in obj) {
arr1.push(key);
arr2.push(obj[key]);
}

console.log(arr1);
console.log(arr2);

//167.26
let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
  };
  let arr = [];
  for (let key in obj){ 
	let z = String(obj[key]);
	  if (z[0] == 1 || z[0] == 2){
		  arr.push(Number(z))
	  }
  }
  console.log(arr);

//167.27
let keys = [ 1, 2, 3, 4, 5];
let values = ['a', 'b', 'c', 'd', 'e'];
let obj = {};

for (let i = 0; i <= 4; i++) {
 let key = keys[i];
 let value = values[i];
 
 obj[key] = value;
}

console.log(obj);

//167.28
let keys = ['a', 'b', 'c', 'd', 'e'];
let values = [ 1, 2, 3, 4, 5];
let obj = {};

for (let i = 0; i <= 4; i++) {
 let key = keys[i];
 let value = values[i];
 
 obj[key] = value;
}

console.log(obj);

