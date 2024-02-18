//223.1
function func() {
    return '!';
}

console.log(func);  //увидим код функции

//224.1
function func() {
    return 'kitty';
}

//224.2
function func() {
    return 'kitty';
}
console.log(func()); 

//224.3
function func() {
    return 'kitty';
}
console.log(func); 

//224.4
function func() {
    return 'kitty';
}
func = 123; 
console.log(func); 

///225.1-225.3
function func1(){
    return 3;
}
let func2 = func1;
console.log(func1() + func2());

//226.1-226.3
let func1 = function() {
    return 1;
}
let func2 = function() {
    return 2;
}
alert (func1() + func2())

//229.1
func();
function func() {
    console.log('!');
}

//229.2
func(); 
let func = function() {
    console.log('!');
};

//230.1
let func1 = function() {console.log('!')};
let func2 = function() {
    console.log('!')
};
function func3() {
    console.log('!')
}

//237.1
let arr = [
    function() {return 1},
    function() {return 2},
    function() {return 3},
];

//237.2
console.log(arr[2]());

//237.3
console.log(arr[0]() + arr[1]() + arr[2]());

//237.4
for (let func of arr) {
   console.log(func());
}

//238.1
let obj = {
 func1: function() {return 1},
 func2: function() {return 2},
 func3: function() {return 3},
};

//238.2
console.log(obj.func1() + obj.func2() + obj.func3());
for (let key in obj) {
    console.log(obj[key]()); 
}

//239.1
let obj = {
    sum: function(arr) {
        let sum = 0;
        for (let elem of arr) {
        sum+=elem;
    } return sum; },
    square: function(arr) {
        let res = 1;
        for (let elem of arr) {
        res = elem ** 2;
    } return res; },
    cube: function(arr) {
        let res = 1;
        for (let elem of arr) {
        res = elem ** 3;
    } return res; },
}
let arr = [1, 2];
console.log(obj.sum(arr)); 
console.log(obj.square(arr)); 
console.log(obj.cube(arr));

//240.1-240.3
test (
    function() {return 1;},
    function() {return 2;},
    function() {return 3;},
);
function test(func1, func2, func3){
    console.log(func1() + func2() + func3());
}

//241.1-241.3
function func1() {
    return 1;
}
function func2() {
    return 2;
}
function func3() {
    return 3;
}
function test(func1, func2, func3) {
    return func1() + func2() + func3();
}
console.log(test(func1, func2, func3)); 

function func1() {
    return 1;
}
function func2() {
    return 2;
}
function func3() {
    return 3;
}
function test(func1, func2, func3) {
    return func1() + func2() + func3();
}
console.log(test(func1, func2, func3)); 

let func1 = function() {
    return 1;
};
let func2 = function() {
    return 2;
};
let func3 = function() {
    return 3;
};
function test(func1, func2, func3) {
    return func1() + func2() + func3();
}
console.log(test(func1, func2, func3));

//242.1-4
function test(func) {
 console.log(func(3));
}
function cube(num) {
    return num * num * num;
}
test(cube);

let test = function(func) {
 console.log(func(3));
};
function cube(num) {
    return num * num * num;
}
test(cube);

let test = function(func) {
 alert(func(2, 3));
}
function sum(num1, num2) {
    return num1 + num2;
}
test(sum);

//243.1
function test(num, func1, func2) {
    return func1(num) + func2(num);
}
 
function square(num) {
    return num * num;
}
 
function cube(num) {
    return num * num * num;
}
console.log(test(3, square, cube)); 

//244.1
function test(arr, func) {
 for (let i = 0; i < arr.length; i++) {
  arr[i] = func(arr[i]);
 }

 return arr;
}

//244.2
let result = test([8, 2, 5], function(num) {
 return num * num * num;
});

console.log(result);

//245.1 
function func(num1, num2) {
    function cube(num2) {
        return num2 * num2 * num2;
    }
    function square(num1) {
        return num1 * num1;
    }
   
    return square(num1) + cube(num2);
}

console.log(func(2, 3));

//250.1
function func1() {
    return function() {
      return 1;
    };
}
 
function func2() {
    return function() {
      return 2;
    };
}
 
let sum = func1()() + func2()();
console.log(sum); 

//251.1
function func() {
    return function(){
        return function(){
            return function() {
                return function() {
                    return '!';
                };
            };
        };
    };
}

console.log( func()()()()() );

//252.1
function func(num1) {
    return function (num2){
        return function(num3) {
            return num1 + num2 + num3;
        };
    };
}

console.log( func(2)(3)(4) );

//252.2 
function func(x) {
    return function(y) {
        return function(z) {
            return function(w) {
                return [x, y, z, w];
            };
        };
    };
}
const result = func(2)(3)(4)(5);
console.log(result); 

//253.1-3
function each(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
}
let array = [1, 2, 3, 4, 5];
let resultarr = each(array, function(num) {
    return num * 2;
});

console.log(resultarr);

function each(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
}
let string = [ "world", "Hellow"];
let resultstr = each(string, function(str) {
    return str.split('').reverse().join('');
});
console.log(resultstr);

function each(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
}
let string = [ "world", "hellow"];
let resultstr = each(string, function(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
});
console.log(resultstr);

//254.1
function each(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
function cube(num) {
    return num ** 3;
}
let resultarr = each([1, 2, 3, 4, 5], cube);
console.log(resultarr);

//256.1
let result = filter([1, 2, 3, 4, 5], elem => elem > 0);

//261.1
function test() {
	let num = 1;
	
	return function() {
		console.log(num);
		num++;
	}
}

let func = test();

func();
func();

//261.2
function test() {
	let num = 10;
	
	return function() {
		console.log(num);
		num--;
	}
}

let func = test();

func();
func();

//269.1
(function() {
	return function() {
		console.log('!');
	};
})()()();

//269.2
(function(num1) {
    return function (num2) {
        alert(num1 + num2);
    }
})(1)(2);

//269.3
(function(num1) {
    return function (num2) {
        return function (num3) {
            alert(num1 + num2 + num3);
        }
    }
})(1)(2)(3);

//272.1
let func = (function () {
    let num = 1;
    return function () {
        if (num == 5){
            console.log(num);
            num = 1;
        } else {
            console.log(num);
            num++;
        }
    }
})();
func();
func();
func();
func();
func();
func();
func();
func();
func();

//275.1
let arr = [1, 2, 3, 4, 5];
function getSum(arr) {
	let sum = arr.shift();
	if (arr.length !== 0) {
		sum += getSum(arr);
	}
	return sum;
}
console.log(getSum(arr));

//278.1
const arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
function squareElements(arr) {
    return arr.map((element) => {
        if (Array.isArray(element)) {
            return squareElements(element);
        } else {
            return Math.pow(element, 2);
        }
    });
}
const squaredArr = squareElements(arr);
console.log(squaredArr);