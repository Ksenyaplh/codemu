//339
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
console.log(elem1);
console.log(elem2);
console.log(elem3);

//340.1
let elem = document.querySelector('#block p');
console.log(elem);

//340.2
let elem = document.querySelector('.block p');
console.log(elem);

//340.3
let elem = document.querySelector('.www');
console.log(elem);

//341.1
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
button1.addEventListener('click', function() {
	console.log('1');
});
button2.addEventListener('click', function() {
	console.log('2');
});
button3.addEventListener('click', function() {
	console.log('3');
});

//342.1
let button1 = document.querySelector('#button1');
button1.addEventListener('click', func1);

let button2 = document.querySelector('#button2');
button2.addEventListener('click', func2);

function func1() {
	console.log(1);
}

function func2() {
	console.log(2);
}

//343
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let elem4 = document.querySelector('#elem4');
let elem5 = document.querySelector('#elem5');
elem1.addEventListener('click', func);
elem2.addEventListener('click', func);
elem3.addEventListener('click', func);
elem4.addEventListener('click', func);
elem5.addEventListener('click', func);
function func() {
	console.log('message');
}

//344
let elem = document.querySelector('#elem');
elem.addEventListener('click', func1);
elem.addEventListener('click', func2);
elem.addEventListener('click', func3);
function func1() {
	console.log('1');
}

function func2() {
	console.log('2');
}

function func3() {
	console.log('3');
}

//345.1
let button = document.querySelector('#button');
button.addEventListener('dblclick', function() {
	console.log('kitty');
});

//345.2
let button = document.querySelector('#button');
button.addEventListener('mouseover', function() {
	console.log('kitty');
});

//345.3
let button = document.querySelector('#button');
button.addEventListener('mouseout', function() {
	console.log('kitty');
});

//345.4
let button = document.querySelector('#button');
button.addEventListener('mouseover', function() {
	console.log('kitty');
});
button.addEventListener('mouseout', function() {
	console.log('dog');
});

//346.1
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {
	console.log(elem.textContent);
});

//346.2
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {
	elem.textContent = 'Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.';
    console.log(elem.textContent);
});

//346.3
let button = document.querySelector('#button');
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
button.addEventListener('click', function() {
    let numbers = Number(elem1.textContent) + Number(elem2.textContent);
    console.log(numbers);
});

//346.4
let button = document.querySelector('#button');
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let di = document.querySelector('#di');
button.addEventListener('click', function() {
    let numbers = Number(elem1.textContent) + Number(elem2.textContent) + Number(elem3.textContent);
    console.log(numbers);
    document.getElementById('di').innerHTML = numbers;
});

//346.5
let button = document.querySelector('#button');
let elem1 = document.querySelector('#elem1');
button.addEventListener('click', function() {
    let numbers = Number(elem1.textContent) + 1;
    elem1.textContent = numbers;
});

//346.6
let button = document.querySelector('#button');
let elem1 = document.querySelector('#elem1');
button.addEventListener('click', function() {
    let numbers = elem1.textContent + '!';
    elem1.textContent = numbers;
});

//347.1
let button = document.querySelector('#button');
let elem = document.querySelector('#elem1');
button.addEventListener('click', function() {
    console.log(elem.innerHTML);
});

//347.2
let button = document.querySelector('#button');
let elem = document.querySelector('#elem1');
button.addEventListener('click', function() {
    elem.innerHTML = '<b>fgfcx</b>';
});

//348.1
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {
    console.log(elem.type);
});

//348.2
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {
    elem.type = 'submit';
});

//348.3
let button = document.querySelector('#button');
let link = document.querySelector('#link');
let di = document.querySelector('#di');
button.addEventListener('click', function() {
    di.innerHTML = link.href
});

//348.4
let button = document.querySelector('#button');
let link = document.querySelector('#link');
button.addEventListener('click', function() {
    link.innerHTML += link.href;
});

//348.5
let button = document.querySelector('#button');
let pict = document.querySelector('#pict');
let text = document.querySelector('#text');
button.addEventListener('click', function() {
    text.innerHTML = pict.src;
});

//348.6
let button = document.querySelector('#button');
let pict = document.querySelector('#pict');
let text = document.querySelector('#text');
button.addEventListener('click', function() {
    pict.width = '300';
});

//349.1
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {
    console.log(elem.value);
    elem.value = 'new text';
});

//349.2
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
let text = document.querySelector('#text');
button.addEventListener('click', function() {
    console.log(elem.value);
    text.innerHTML = elem.value;
});

//349.3
let button = document.querySelector('#button');
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let text = document.querySelector('#text');
button.addEventListener('click', function() {
    elem2.value = Math.pow(parseInt(elem1.value), 2);
});

//349.4
let button = document.querySelector('#button');
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let text  
button.addEventListener('click', function() {
    text = elem1.value;
    elem1.value = elem2.value;
    elem2.value = text;
});

//350.1
let elem = document.querySelector('#elem1');
elem.addEventListener('focus', function() {
	elem.value = 1;
});
elem.addEventListener('blur', function() {
	elem.value = 2;
});

//350.2
let elem = document.querySelector('#elem1');
elem.addEventListener('focus', function() {
	elem.value = 1;
});
elem.addEventListener('blur', function() {
	elem.value = Math.pow(parseInt(elem.value), 2);
});

//350.3
let elem = document.querySelector('#elem1');
elem.addEventListener('focus', function() {
	elem.value = '';
});

//351.1
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {
    document.write(elem.className);
})

//351.2
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {
    elem.className = 'kfdjirkjbfgkljfgjlkj';
    document.write(elem.className);
})

//351.3
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {
    let arr = elem.className.split(' ');
    document.write(arr);
})

//352
console.log( document.querySelector('#image').src );

//354.1
let elem = document.querySelector('#elem');
elem.addEventListener('focus', func);
function func() {
	this.value = '1';
}
elem.addEventListener('blur', func2);
function func2() {
	this.value = '2';
}

//354.2
let button = document.querySelector('#button');
button.addEventListener('click', function() {
    button.value++;
})

//355.1
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let elem4 = document.querySelector('#elem4');
let elem5 = document.querySelector('#elem5');
elem1.addEventListener('click', func);
elem2.addEventListener('click', func);
elem3.addEventListener('click', func);
elem4.addEventListener('click', func);
elem5.addEventListener('click', func);
function func() {
this.textContent += '!';
}

//355.2
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
elem1.addEventListener('blur', func);
elem2.addEventListener('blur', func);
elem3.addEventListener('blur', func);
function func() {
	this.value = Math.pow(this.value, 2);
}

//356.1
let elems = document.querySelectorAll('.www');
button.addEventListener('click', function() {
    for (let elem of elems) {
        elem.textContent = 'text';
    }
})

//356.2
let elems = document.querySelectorAll('.www');
button.addEventListener('click', function() {
    for(let i=0;i<elems.length; ){
        let elem= elems[i++];
        elem.innerHTML += i;
    }
})

//356.3
let elems = document.querySelectorAll('.elem');
let text = document.querySelector('#text');
let but = document.querySelector('#but');
let sum = 0;
but.addEventListener('click', function() {
    for (let elem of elems) {
		sum += Number(elem.value);	
		text.innerHTML = sum;
    }
})

//357.1
let elems = document.querySelectorAll('.elem');
for (let elem of elems) {
	elem.addEventListener('focus', func);
}
function func() {
	this.value = Number(this.value) + 1;
}

//357.2
let elems = document.querySelectorAll('.elem');
for (let elem of elems) {
	elem.addEventListener('click', func);
}
function func() {
	this.textContent = Math.pow(Number(this.textContent), 2);
}

//358.1
let divs = document.querySelectorAll('div');
for (let div of divs) {
	div.addEventListener('click', function(){
		this.textContent++;
	});
}

//359.1
let button = document.querySelector('#button');
let hr = document.querySelector('#href');
button.addEventListener('click', func);
function func() {
hr.textContent += hr.href;
this.removeEventListener('click', func);
}

//364.1
let txt = document.querySelector('#id');
let id = document.querySelector('#txt');
txt.addEventListener('blur', function() { 
  let txt = txt1.value;
  id.textContent += ' ' + txt;
  console.log(id.textContent);
});


//364.2
let id = document.querySelector('#id');
let id = document.querySelector('#id');
let id = document.querySelector('#id');
let txt = document.querySelector('#txt');
let button = document.querySelector('#button');
button1.addEventListener('click', function () {
    let sum = Number(id.value) + Number(id.value) + Number(id.value);
    txt.textContent = "Сумма: " + sum;
});


//364.3
let id = document.querySelector('#id');
let txt = document.querySelector('#txt');
id5.addEventListener('blur', function(){
    let number = id.value;
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number.charAt(i));
    }
    txt.textContent = "Сумма цифр: " + sum;
});

//364.4
let id = document.querySelector('#id');
let txt = document.querySelector('#txt');
id6.addEventListener('blur', function(){
    let number = id.value.split(",");
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number[i]);
    }
    let itog = sum / number.length;
    txt.textContent = "Среднее арифметическое: " + itog;
})

//364.5
let id1 = document.querySelector('#id1');
let id2 = document.querySelector('#id2');
let id3 = document.querySelector('#id3');
let id4 = document.querySelector('#id4');
id1.addEventListener('blur', function(){
    let number = id1.value.split(" ");
        id2.value = number[0];
        id3.value = number[1];
        id4.value = number[2];
    }
);

//364.6
let id = document.querySelector('#id');
id.addEventListener("blur", function() {
    let znach1 = id11.value;
    let words = znach1.split(" ");
    let itog2 = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
    id.value = itog2;
});

//364.7
let id = document.querySelector('id');
let txt = document.querySelector('txt');
id.addEventListener("blur", function() {
    let zhach2 = id.value;
    let words = zhach2.split(" ");
    words = words.filter(function(word) {
        return word !== "";
    });
    let count = words.length;
    txt.textContent = "Количество слов: " + count;
});


//364.8
let id = document.querySelector('id');
id.addEventListener("blur", function() {
    let date = id.value;
    let part = date.split(".");
    let datta = part[2] + "-" + part[1] + "-" + part[0];
    id.value = datta;
});

//364.9
let id = document.querySelector('#id');
let button = document.querySelector('#button');
let result = document.querySelector('#result');
button.addEventListener("click", function() {
    let word = id.value.toLowerCase();
    if (word === word.split("").reverse().join("")) {
        result.textContent = "палиндром";
    } else {
        result.textContent = "не палиндром";
    }
});

//364.10
let id = document.querySelector('#id');
let itog = document.querySelector('#itog');
id15.addEventListener("blur", function() {
    let number = id.value;
    if (number.includes("3")) {
        itog.textContent = "Число содержит цифру 3";
    } else {
        itog.textContent = "Число не содержит цифру 3";
    }
});

//364.11
let txt = document.getElementsByTagName("p");
let button3 = document.querySelector('#button3');
button3.addEventListener("click", function() {
    for (let i = 0; i < txt.length; i++) {
        txt6[i].textContent += " " + (i + 1);
    }
});

//364.12
let links = document.getElementsByTagName("a");
let button5 = document.querySelector('#button5');
button5.addEventListener("click", function() {
    for (let i = 0; i < links.length; i++) {
        links[i].textContent += " (" + links[i].href + ")";
    }
});

//364.13
let links = document.getElementsByTagName("a");
let button6 = document.querySelector('#button6');
button6.addEventListener("click", function() {
    for (let i = 0; i < links.length; i++) {
        if (links1[i].href.startsWith("http://")) {
            links1[i].textContent += " →";
        }
    }
});

//364.14
let id1 = document.querySelector("#id1");
let id2 = document.querySelector("#id2");
let id3 = document.querySelector("#id3");
let button = document.querySelector('#button');
id1.addEventListener("click", function() {
    let square = parseInt(id1.textContent) ** 2;
    id16.textContent = square;
});
id2.addEventListener("click", function() {
    let square = parseInt(id2.textContent) ** 2;
    id17.textContent = square;
});
id3.addEventListener("click", function() {
    let square = parseInt(id3.textContent) ** 2;
    id18.textContent = square;
});

//364.15
let id = document.querySelector('#id');
let result = document.querySelector('#result');
id.addEventListener("blur", function() {
    let date = id.value;
    let dayOfWeek = getDayOfWeek(date);
    result.textContent = dayOfWeek;
});
function getDayOfWeek(dateString) {
    let dateParts = dateString.split(".");
    let day = parseInt(dateParts[0]);
    let month = parseInt(dateParts[1]) - 1;
    let year = parseInt(dateParts[2]);
    let date = new Date(year, month, day);
    let daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    return daysOfWeek[date.getDay()];
}

//364.16
let id = document.querySelector('#id');
let butt = document.querySelector('#butt');
let but = document.querySelector('#but');
butt.addEventListener("click", function() {
    let currentValue = parseInt(id.value);
    id.value = currentValue + 1;
});
but.addEventListener("click", function() {
    let currentValue = parseInt(id.value);
    if (currentValue > 0) {
        id.value = currentValue - 1;
    }
});

//364.17
let id = document.querySelector('#id');
let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", function() {
        let currentValue = parseInt(id.value);
        id.value = currentValue + 1;
    });
}

//364.18
let divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
    let div = divs[i];
    let text = div.innerHTML;
    if (text.length > 10) {
        text = text.substring(0, 10) + "...";
    }
    div.innerHTML = text;
}

//364.19
function generate() {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    for (let i = 0; i < 8; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    document.querySelector('#id').value = randomString;
}

//364.20
function random() {
    let input = document.querySelector('#randomstring');
    let string = input.value;
    let shuffle = shuffleString(string);
    input.value = shuffle;
}
function funct2(string) {
    let characters = string.split("");
    for (let i = characters.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = characters[i];
        characters[i] = characters[randomIndex];
        characters[randomIndex] = temp;
    }
    return characters.join("");
}

//364.21
function fahrenheit() {
    let id234 = document.querySelector('#id234');
    let celsiusResult = document.querySelector('#result');
    let fahrenheit = parseFloat(id234.value);
    let celsius = (fahrenheit - 32) * 5/9;
    celsiusResult.textContent = "Temperature in Celsius: " + celsius.toFixed(2);
}

//364.22
function factorial() {
    let numberInput = document.querySelector('#numberInput');
    let result = document.querySelector('#result');
    let number = parseInt(numberInput.value);
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    result.textContent = "Factorial: " + factorial;
}

//364.23
function calculateRoots() {
    let inputA = document.querySelector('#inputA');
    let inputB = document.querySelector('#inputB');
    let inputC = document.querySelector('#inputC');
    let res = document.querySelector('#res');
    let a = parseInt(inputA.value);
    let b = parseInt(inputB.value);
    let c = parseInt(inputC.value);
    let discriminant = Math.pow(b, 2) - (4 * a * c);
    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result.textContent = "Roots: " + root1 + ", " + root2;
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        res.textContent = "Root: " + root;
    } else {
        res.textContent = "No real roots";
    }
}
