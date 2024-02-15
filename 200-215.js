//200.1
function func() {
	console.log('Ksenya');
}

func();

//200.2
let sum = 0;
function func() {
	for (let i=0 ; i<=100 ; i++){
        sum+= i;
    }
}
func();
console.log(sum)

//201.1
function func(num) {
	console.log(num ** 3);
}
func(2);

//201.2
function func (num) {
    if (num < 0){
    console.log('---')
    } else {
    console.log('+++')
    }
    }
    func(2);

//202.1
function func(num1, num2, num3) {
	console.log(num1 + num2 + num3);
}
func(1, 2, 3);

//203.1
let param1 = 1;
let param2 = 2;
let param3 = 3;
function func (param1,param2,param3){
console.log(param1+param2+param3);
}
func(param1,param2,param3);

//205.1
function func(num) {
    return num ** 3;
    }
    let res = func(3);
    console.log(res);

//205.2
function func(num) {
    return Math.sqrt(num);
};
    let res = func(3) + func(4);
    console.log(res);

///206.1
function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}
let res = round(sqrt(2));
console.log(res);

//206.2
function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
let res = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(res);

//206.3
function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
function round(num) {
	return num.toFixed(3);
}
let res =round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(res);

//208.1
function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
		
	}
    return sum;
}

console.log( func(5) );

//209.1
function func (num){
    let sum = 0;
    let i = 1;
    while (num > 10){
    num = num / 2;
    console.log(num);
    }
    }
    console.log(func(100))

//210.1
function func(num1, num2) {
	
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}

}

console.log(func(3, 4));

//211.1
let arr = [4, 2, -5, 19, 13, 0, 10];
function isPositive(arr) {
	for (let elem of arr) {
		if (elem % 2 != 0) {
			return false;
		}
	}
	
	return true;
}
console.log(isPositive(arr))

//211.2
let arr = [3, 5, 7, 9, 13, 1, 11];
function isPositive(arr) {
	for (let elem of arr) {
		if (elem % 2 == 0) {
			return false;
		}
	}
	
	return true;
}
console.log(isPositive(arr))

//211.3
let arr = [3, 3, 7, 9, 13, 1, 11];
function check(arr) {
    for (let q=1; q<arr.length; ++q) {
      if (arr[q] === arr[q-1]) {
        return true;
      }
    }
    
    return false;
  }
  
  console.log(check(arr));

  //212.1
  function func(a, b) {
	return a == b;
}
console.log(func(3,2));

//212.2
function func(a, b) {
	return a != b;
}
console.log(func(3,2));

//212.3
function func(a, b) {
	return a + b >= 10;
}
console.log(func(3,2));

//212.4
function func(num) {
	return num >= 0;
}
console.log(func(3));

//214.1
function func1() {
	return 3;
}
function func2() {
	return 5;
}

console.log( func1() + func2() );

//214.2
function sum(arr) {
	let res = 0;
	for (let elem of arr) {
			 res += elem;	
	}
		return res;
	}
	
	console.log(sum([1, 2, 3, 4, 5]));

//214.3
let arr = [1, 2, 3, 4, 5];
function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
 		res += elem;
	}
	console.log(res);
}
func(arr);

//214.4
function func1() {
	return 3;
	}
function func2() {
	return 5;
	}
console.log( func1() + func2() );

//214.5
let res = sum([1, 2, 3, 4, 5]);
console.log(res);
function sum(arr) {
	let sum1 = 0;
for (let elem of arr) {
		sum1 += elem;
 	}
		
	return sum1;
	}

//214.6
let res = sum([1, 2, 3, 4, 5]);
 console.log(res);

 function sum(arr) {
	let sum1 = 0;
	
 	for (let elem of arr) {
 		sum1 += elem;
 	}
    return sum1;
}

//214.7
function add(num) {
	if (num <= 9) {
 		return '0' + num;
 	} else {
         return num;
     }
 }
 console.log(add(4));

 //214.8
 function sum(arr) {
	let res = 0;
	for (let elem of arr) {
 		res += elem;
 	}
 	return res;
 }
let arr = [1, 2, 3, 4, 5];
let sum1 = sum(arr);
console.log(sum1);

//214.9
function getDigitsSum(num) {
	let str = String(num);
	let arr = str.split('');
	let sum = 0;
		
	for (let elem of arr) {
 		sum += Number(elem);
 	}
		
 	return sum;
	}
let num = 12345;
let res = getDigitsSum(num);
console.log(res);

//214.10
function isPrime(num) {
 	for (let i = 2; i < num; i++) {
 		if (num % i === 0) {
			return false;
		} 
			
	}
    return true;
			
}
	
console.log(isPrime(13));

//215.1
function calcSum(arr) {
	let sum = 0;
		
	for (let elem of arr) {
		sum += elem;
 	}
    return sum;
 }
console.log(calcSum([3,2,7]));

//215.2
function func(num) {
	let del = [];
	for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            del.push(i);
	       }
	   }
   return del;
 }
	  
console.log(func(53)); 

//215.3
function func(str) {
	return str.split('');
}
console.log(func('kitty')); 

//215.4
function func(str) {
    return str.split('').reverse().join('');
	}
console.log(func('kitty')); 

//215.5
function func(str) {
	return str.slice(0, 1).toUpperCase() + str.slice(1);
	}
console.log(func('kitty')); 

//215.6
function func(str) {
	str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
	    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
	}
	 return str.join(' ');
}

console.log(func("kitty kitty kitty"));

//215.7
function func(n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}
	return arr;
}
	  
console.log(func(23));

//215.8
function func(num) {
	let sum = 0;
	let arr = String(num).split('');
	for (let elem of arr) {
	    sum += Number(elem);
	}
	return sum;
}
	
console.log(func(67));

//215.9
function func(year) {
	if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
		return 'високосный год';
	} else {
	    return 'не високосный год';
	}
}
console.log(func(366));

//215.10
function func(seconds) {
	let day = 86400;
	return Math.floor(seconds / day); 
}
console.log(func(86400));

//215.11
function func(arr) {
	let random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

//215.12
function func(num) {
	for (let i = 2; i < num; i++) {
	    if (num % 1 !== 0 && num % num !== 0) {
			return 'простое';
		}
	}
	return 'не простое';
}

