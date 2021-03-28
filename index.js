// Data types

let firstName ='Mohamed'
console.log(firstName)

let age =20
console.log(age)

let accepted = true
console.log(true)

//////////////////////////////////////////////////////////////////

// Naming Convention
   // --> Keywords
   // not start number
   // - space

////////////////////////////////////////////////////////////

// case sensitive

let lastName = 'Amer'
console.log(lastName)

let LastName = 'Amer'
console.log(LastName)

////////////////////////////////////////////////////////////////

// const 

const value = 50
// value = 60
console.log(value)

// JS is interpreted language
console.log('Ahmed')

/////////////////////////////////////////////////////////////

// Operators 
// Arithmatic operators
// + - * / % **

let num1 =2
let num2 = 3

let result = num1 + num2
console.log(result)

result = num1 - num2
console.log(result)

result = num1 * num2
console.log(result)

result = num1 / num2
console.log(result)

result = num1 ** num2
console.log(result)

result = num1 % num2
console.log(result)

/////////////////////////////////////////////////////////////////////////

// Assigmnet Operators
// = += -=  *= /= **= %=

let sum = 10
sum += 5  // ---> sum = sum + 5
console.log(sum)

///////////////////////////////////////////////////////////////////////

// Comparion Operator
// == === != !== > >= < <=

let num11 = 7
let num12 = 8
console.log(num11 !== num12)

////////////////////////////////////////////////////////////////////

// Logical operators
// && || xor

////////////////////////////////////////////////////////////////

// Post increment vs pre increment
// z++ --> Post
// ++z --> pre

let z = 1;
console.log(z++); // 1
console.log(++z) 

///////////////////////////////////////////////////////////////

// Precedence
/*
()
++ -- 
* / 
+ - 
=
*/

///////////////////////////////////////////////////////////////////////

// Consitions

// if (condition){

// }
// else{
    
// }

// if (condition){

// }
// else if(condion2){

// }
// else{
    
// }

// condition ? true : false

///////////////////////////////////////////////////////////////////////

let test = 5
if(test == 0){
    console.log('Number is equal to zero')
}
else if(test > 10){
    console.log('Number is greater than 10')
}
else{
    console.log('Number is smaller than 10')
}
////////////////////////////////////////////////////////////////////////

// getElementById

document.getElementById('grading').textContent = 'Grading System'

// Task 2 promopt --> 1 name 
// 2 --> mark 

/**
 * A ==> 100 / 90
 * B ==> 90 / 85
 * c ==> 85 / 70
 * D ===> 70 /60
 * F otherwise
 * document.getElemntByID()
 */

// let studentName  = prompt('Enter your name')
// let mark = parseInt(prompt('Enter a mark'))

// if(mark<=100 && mark>=90){
//     document.getElementById('paragraph').textContent = studentName + 'Your grade is A'
// }
// else if(mark<90 && mark>=85){
//     document.getElementById('paragraph').textContent = studentName + 'Your grade is B'
// }
// else if(mark<85 && mark>=70){
//     document.getElementById('paragraph').textContent = studentName + 'Your grade is C'
// }
// else if(mark<70 && mark>=60){
//     document.getElementById('paragraph').textContent = studentName + 'Your grade is D'
// }
// else{
//     document.getElementById('paragraph').textContent = studentName + 'Your grade is F'
// }

///////////////////////////////////////////////////////////////////////////////

// Switch

const country = 'Egypt'
switch(country){
    case 'Egypt':
    console.log('It is 30 degrees');
    break;
    case 'Paris':
        console.log('It is 20 degrees');
        break;
        case 'London':
            console.log('It is 10 degrees');
            break;
     default:
         console.log('Temp is undiefined')
}
//////////////////////////////////////////////////////////////////////////////

// let vs var

// let --> block scope
// var function scope 


// function someFn(){
//     if(5==5){
//         let localVar = 1000
//         console.log(localVar)
//     }
//     // console.log(localVar)  -->error

//     function nested(){
//         // console.log(localVar)  --> error
//     }
//     nested()
// }
// someFn()


/////////////////////////////////////////////////////////////////////////////

// Var 

function someFn(){
    if(5==5){
        var localVar = 1000
        console.log(localVar)
    }
    console.log(localVar) 

    function nested(){
        console.log(localVar)  
    }
    nested()
}
someFn()

// console.log(localVar)  --> error

/////////////////////////////////////////////////////////////////////////////////

//  For loop

for(let i = 0 ; i<=10 ; i++){
    if(i%2 == 0){
        console.log(i + ' is even')
    }
}

// Task while loop print odd numbers

let i = 0;
while(i<=10){
    if(i%2 == 1){
        console.log(i + ' is odd')
    }
    i++
}

///////////////////////////////////////////////////////////////////////////////

// Functions

function add(a,b){
    return a+b
}
console.log(add(3,5))

// Arrow Function

let add1 = (a,b) => a + b;
console.log(add1(5,5))

function measures(uName , h ,w){
    console.log(uName)
    return h+w
}
console.log(measures('Osama',165,80))


// Arrow Function --> If we have more than one statment we use {}

let measures1 = (uName,h,w) => {
    console.log(uName)
    return h + w
}

console.log(measures1('Osama',165,80))

/////////////////////////////////////////////////////////////////////////////

let maxNo = (a,b) =>{
    if(a<b){
       return a + 'is greater than ' + b
    }
    console.log('Message')
    return b + 'is greater than ' + a

    
}

console.log(maxNo(5,3))

//////////////////////////////////////////////////////////////////////////////

// Array 

let fruits = ['Orange', 'Apple','Grapes']
console.log(fruits[0])

console.log(fruits.length)

for(let i = 0; i<fruits.length;i++){
    console.log(fruits[i])
}

// ForEach

// fruits.forEach(function(fruit){
//     console.log(fruit)
// })

fruits.forEach((fruit)=>{
    console.log(fruit)
})

////////////////////////////////////////////////////////////////////////////

// Object

let user = {
    name:'Ali',
    age:20,
    email:'ali@gmail.com'
}

// Print whole object
console.log(user)

// name only
console.log(user.name)



// Dot Notation
user.name = 'Ahmed'
console.log(user.name)

// Bracket Notation

user['name'] = 'Mohamed'
console.log(user['name'])


let selection = 'name'
user[selection] = 'Hamza'
console.log(user.name)

let inputChange = () =>{
    let u = document.getElementById('text').value  // name
    user[u] = document.getElementById('value').value
    console.log(user)
}

////////////////////////////////////////////////////////////////////////////

// for in

// for(let x in nameOfObject)

for(let x in user){
    console.log(user[x])
}

// for of
// for(let x in array)

const numbers = [1,2,3,4,5,6]

for(let number of numbers){
    console.log(number)
}

for(let number in numbers){
    console.log(number)
}

/////////////////////////////////////////////////////////////////////////////////

// shorthand property

let uName = 'ahmed'
let uAge = 40

let person = {
    uName,  // uName:uName
    uPersonAge : uAge

}
/////////////////////////////////////////////////////////////////////////////////

// Array of objects

students = [
    {
        name:'Ahmed',
        age:17,
        math: 16,
        eng:30,
        arabic:20,
        degrees:[15,30,20]
    },

    {
        name:'Omar',
        age:17,
        math: 18,
        eng:20,
        arabic:10,
        degrees:[17,18,10]
    },

    {
        name:'Zain',
        age:18,
        math: 15,
        eng:20,
        arabic:20,
        degrees:[15,20,20]
    },
]

// for(i =0; i<students.length;i++){
//     console.log(students[i].name)
// }


students.forEach((student)=>{
    console.log(student.name)
    sum = 0;
    student.degrees.forEach((deg)=> (sum +=deg))
    console.log(sum)
})

//////////////////////////////////////////////////////////////////////////////

// find / filter in JS 

// find --> First Ocuurence (object)
// filter --> new array

const stFind = students.find((s)=> s.age === 17)
console.log(stFind)

const stFilter = students.filter((s)=> s.age === 17)
console.log(stFilter)

///////////////////////////////////////////////////////////////////////////////

// Advanced 


