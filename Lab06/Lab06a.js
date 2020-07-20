//------------------------------------------------
// Lab 06
// Huynh Bao Long Tran
// hbtran@miu.edu
//------------------------------------------------

//
// Exercise 1
// Filter for String object
//
String.prototype.filter = function (word) {
    let _text = this;
    let data = _text.split(' ');
    let res = '';
    for (let i = 0; i < data.length; i++) {
        if (word != data[i]) {
			res += data[i] + ' ';
		}
    }
    return res.substr(0, res.length - 1);
}
console.log("This house is not nice!".filter('not'));

//
// Exercise 2
// Bubble Sort for Array
//
Array.prototype.bubbleSort = function () {
    let res = Array.prototype.slice.call(this);

    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < res.length - i - 1; j++) {
            if (res[j] > res[j + 1]) {
                let tmp = res[j];
                res[j] = res[j + 1];
                res[j + 1] = tmp;
            }
        }
    }
    return res;
}
console.log([6,4,0, 3,-2,1].bubbleSort());

//
// Exercise 3
//
function Person(name) {
    this.name = name;
}
// --- Using function
function Teacher(name) {
    Person.call(this, name);
}
Teacher.prototype.teach = function (subject) {
    console.log(this.name + ' is now teaching ' +  subject);
}
let long1 = new Teacher('Long 1');
long1.teach('math');

// --- Using Object.create
const Teacher2 = function (name) {
    return Object.create({
        name: name,
        teach: function (subject) {
            console.log(this.name + ' is now teaching ' +  subject);
        }
    })
}
let long2 = new Teacher2('Long 2');
john.teach('Geography');

//
// Exercise 4
//
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greeting = function () {
        console.log('Greetings, my name is ' + this.name + ' and am ' + this.age + ' years-old');
    }
    this.salute = function () {
        console.log('Good morning! and in case I don\'t see you, good afternoon, good evening and good night!');
    }
}
let p1 = new Person('Maria', 24);
p1.greeting();
p1.salute();

// --- Using function constructor
function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;

    this.greeting = function () {
        console.log('Hey my name is ' + this.name + ' and I am studying ' + this.major);
    }
}
let s1 = new Student('Pete', 32, 'Computer Science');
s1.greeting();
s1.salute();

function Professor(name, age, dept) {
    Person.call(this, name, age);
    this.dept = dept;

    this.greeting = function () {
        console.log('Good day, my name is ' + this.name + ' and I am in the ' + this.dept + ' department');
    }
}
let pf1 = new Professor('Jack', 53, 'Life Science');
pf1.greeting();
pf1.salute();

// --- Using prototype inheritance
function Student2(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}
Student2.prototype = Object.create(Person.prototype);
Student2.prototype.greeting = function () {
    console.log('Hey my name is ' + this.name + ' and I am studying ' + this.major);
}
let s2 = new Student2('Bruce', 22, 'Chemistry');
s2.greeting();
s2.salute();

function Professor2(name, age, dept) {
    Person.call(this, name, age);
    this.dept = dept;
}
Professor2.prototype = Object.create(Person.prototype);
Professor2.prototype.greeting = function () {
    console.log('Good day, my name is ' + this.name + ' and I am in the ' + this.dept + ' department');
}
let pf2 = new Professor2('Kelly', 48, 'Biochemistry');
pf2.greeting();
pf2.salute();