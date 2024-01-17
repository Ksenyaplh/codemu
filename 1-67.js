//6.1
alert('text');

//10.1
"use strict";
alert('text!');

//11.1
alert('Привет, мир!'); // комментарий
/*
	комментарий
*/
alert('Привет, мир!');

//13.1
let num;    
num = 123;    
alert(num);

//14.1
let a = 1;
let b = 2;
let c = 3;

***

let a = 1, b = 2, c = 3;

***

let a, b, c; 

a = 1;
b = 2;
c = 3;

//15.1
let a;   

a = 10;    
alert(a); 

a = 20; 
alert(a);

//17.1
let a = 1 + 2 + 3;
alert(a);

//18.1
let a = 10;
let b = 2;
let c = a+b;
let d = a-b;
let e = a*b;
let f = a/b;

alert (`${c}, ${d}, ${e}, ${f}`);

//18.2
let c = 10;
let d = 5;
let result = c+d;
alert(result);

//18.3
let a = 1;
let b = 2;
let c = 3;
alert(a+b+c);

//18.4
let a = 10;
let b = 5;
let c = a-b;
let d = 7;
let result = c+d;
alert(result);

//22.1
let a = 1.5;
let b = 0.75;
alert(a+b);

//23.1
let a = -100;
alert(a);

//23.2
let a = 100;
alert(-a);

//25.1
let a = 13;
let b = 5;
alert(a % b);

//26.1
let a = 2;
alert(a ** 10);

//28.1
let str = "Ksenya Pliukhova";
alert(str);

//29.1
let str = '!!!';
alert(str);

//29.2
let str1 = 'java';
let str2 = 'script';
alert(str1 + str2);

//29.3
let str1 = 'hello';
let str2 = 'world';
alert(str1 + ' ' + str2);

//30.1
alert('kitty'.length);

//31.1
let str1 = 'xxx';
let str2 = 'yyy';
let txt  = `aaa ${str1}  bbb ${str2} ccc`;

//32.1
let str = `a
b c`;

//34.1
let a;
alert(a);

//35.1
let a = null;
alert(a);

//36.1
let a = true;
alert(a);

//36.2
let a = false;
alert(a);

//37.1
let str1 = 'xxx';
let str2 = 'yyy';
alert(str1*str2);

//38.1
alert( 10 / 0);

//38.2
alert(-10 / 0);

//39.1
let num = 100;
console.log(num);

//39.2
let num1 = 1;
let num2 = 2;
let num3 = 3;
console.log(num1, num2, num3);

//40.1
console.log(123);
console.log('123');

//42.1
const PI = 3.14;
let r = 2;
alert(PI*r**2);

//44.1
let a = '10';
let b = '20';
alert(Number(a) + Number(b)); 

//45.1
let a = '2';
let b = '3';
alert(+a + +b); 

//47.1
let num1 = parseInt('5px');
let num2 = parseInt('6px');
alert(num1 + num2); 

//47.2-47.3
let num1 = parseInt('5.5px');
let num2 = parseInt('6.25px');
alert(num1 + num2 +"px"); 

//48.1
let num1 = 13;
let num2 = 22;

alert(String(num1) + String(num2));

//49.1
let num = 647381;
alert(String(num).length);

//49.2
let num1 = 1454;
let num2 = 6480;
alert(String(num1).length + String(num2).length);

//52.1
let str = 'abcde';

alert(str[0]);
alert(str[2]); 
alert(str[4]);

//52.2
let str = 'abcde';
alert(str[4]+str[3]+str[2]+str[1]+str[0]);

//53.3
let str = 'abcde';
let num = 3; 
alert(str[num]); 

//54.1
let str = 'kitty';
let last = str.length - 1; 
alert(str[last]);

//54.2
let str = 'kitten';
let last = str.length - 2; 
alert(str[last]);

//54.3
let str = 'kitten';
let last = str.length - 3; 
alert(str[last]);

//55.1
let test = '12345'; 
alert(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]));

//56.1
let test = String(12345);
alert(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]));

//56.2
let test = String(12345);
alert(test[0] * test[1] * test[2] * test[3] * test[4]);

//56.3
let test = String(12345);
alert(test[4] + test[3] + test[2] + test[1] + test[0]);

//58.1
let num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);

//59.1
let num = 10;
num++;
num++;
num--;
alert(num);

//61.1
alert(0.1 * 0.2);

//61.2
alert(0.3 - 0.1);

//62.1
let age = prompt('Ваш возраст?');
alert('Ваш возраст: ' + age);

//63.1
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

alert(Number(num1) + Number(num2));

//63.2
let num = prompt('Введите сторону квадрата');
alert(Number(num)**2);

//63.3
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

alert((Number(num1) + Number(num2))*2);

//64.1
document.write('kitty');

//64.2
document.write('<i>kitty</i>');

//64.3
let str = 'text';
document.write(str);

//64.4
document.write('1 <br> 2 <br> 3 <br> 4 <br> 5');

//65.1
let num1 = 1;
let num2 = 2;
console.log('сумма: ' + (Number(num1) + Number(num2)));

//65.2
let a = 1;
let b = 2;
console.log(a + b);

//65.3
let num = '123';
let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
console.log(sum);

//65.4
let num = '123';
console.log(num[0]);

//65.5
let a = 0;
console.log(++a);

//65.6
let num = '123';
console.log(num.length);

//65.7
let a = 24 * 60 * 60;
console.log(a);

//65.8
let num = 123;
let str = String(num);
console.log(str.length);

//65.9
let num = 123;
let str = String(num);
console.log(str[str.length - 1]);

//65.10
let num = 123;
let str = String(num);
console.log(str.length);

//65.11
let num = 123;
let str = String(num);
console.log(str[str.length-1]);

//65.12
let a = '123';
let b = '456';
let s = Number(a) + Number(b);

console.log(s);

//65.13
let aaa = 1;
let bbb = 2;
let ccc = 3;

console.log(aaa + bbb + ccc);

//66.1
alert(24 * 60 * 60);

//66.2
alert(30 * 24 * 60 * 60);

//66.3
alert(365 * 24 * 60 * 60);

//66.4
alert(24 * 60);

//66.5
alert(365 * 24 * 60);

//66.6
alert(1024 * 1024);

//66.7
alert(1024 * 1024 * 1024);

//66.8
alert(1024 * 1024 * 1024 * 10);

//66.9
alert(1024 * 1024 * 1024 * 1024);

//66.10
alert(1024 * 1024 * 1024);

//67.1
let r = prompt('Введите радиус');
let s = 3.14 * Number(r)**2;
document.write(s);

//67.2
let a = prompt('Введите стороной квадрата');
let s = Number(a)**2;
document.write(s);

//67.3
let a = prompt('Введите сторонy прямоугольника');
let b = prompt('Введите сторонy прямоугольника');
let s = a * b;
document.write(s);

//67.4
let a = prompt('Введите сторонy прямоугольника');
let b = prompt('Введите сторонy прямоугольника');
let p = (Number(a) * Number(b))*2;
document.write(p);

//67.5
let tc = prompt('Введите температурy в градусах Цельсия');
let f = Number(tc) * 9 / 5 + 32;
document.write(f);

//67.6
let tf = prompt('Введите температурy в градусах Фаренгейта');
let tc = Number(tf) - 32 * 5 / 9;
document.write(tc);