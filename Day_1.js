// a = 10
// console.log(a)

// Types of keywords in js 
// var, let, const 

// var a =10;
// console.log(a)

// let b = 100;
// console.log(b)

// const c = 1000;
// console.log(c)

// re-assign 
// a =200;
// console.log(a)

// re-declare 
// var a = 300;
// console.log(a)

// Let >>>>

// LET: re-assign & not re-declare 
// let a = 10;
// let a = 100;
// console.log(a)

// CONST:- not re-assign & not re-declare 

const d = 10;
d =500;
console.log(d)

// error d all ready declared 

var a =10;
{{{
    {console.log(a)}
}}}

{
    const a = 10;
}
console.log(a)  // error: a is not defined

{
    {
        {
            let a =10;
            {

            }
            
        }
        console.log(a); //ReferenceError: a is not defined
    }
}

// we can use const and let only in local scope 

let arr = [1,2,3,4,5,6]
arr[0] = 100;
console.log(arr)  // output [100,2,3,4,5,6]

// JS -> Have primitive and non primitive data types

// const a = 100;

// const arr = [1,2,3,4,5,5]
// arr[0] = 100;
// console.log(arr)

const arr = [1,2,3,4,5]

arr[0]=[1,3,4]
console.log(arr) //output->[ [ 1, 3, 4 ], 2, 3, 4, 5 ]

//function declaration-->

function abc(){
    console.log('xyz')
}
abc()

//expression function--->

let b = function xyz(){
    console.log("abc");
};
b()

//arrow function -->
//ES6-->

const fn = () => {
    console.log('arrow function')
}

fn()
//anonymous function -->

let c = function(){
    console.log("anonymous function")
}
c()

function x(){
    return ('fdjnvm');
}
console.log(x());

const y = () => 'irytio';
console.log(y());

let z = () => ['sjhd','dbc'];
console.log(z())


let v = 5;
// if(v > 10){
//     console.log('greater');}
// else if {
//     console.log('less');
// }
// else{
//     console.log('equal');
// }

console.log(v > 10? 'greater': v<10 ? 'less': 'equal')
//ternary operator

console.log(v > 10 ? 'first': 'second')

switch (v){
    case v>10:
        console.log('greater');
        // break;
    case v <10:
        console.log('less');
        // break;
    default:
        console.log('equal');
        // break;
}

// var x = ['s', 'm', 't','w']

var x = 'w'

switch (x){
    case 's':
        console.log('Sunday');
        break;
    case 'm':
        console.log('Monday');
        break;
    case 't':
        console.log('Tuesday');
        break;
    case 'w':
        console.log('Wednesday');
        break;
    default:
        console.log('more');
        break;
}

