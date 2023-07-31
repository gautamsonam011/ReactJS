// let arr = [1,2,3,4,5,56,78,35,'Sonam']

// console.log(arr.indexOf(4)) // find index

// console.log(arr)
// arr.push(100)  //push and pop operate only with last element
// console.log(arr)
// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr) //shift and unshift operate only with first element
// arr.unshift(300)
// console.log(arr)
// let arr = [1,2,3,4]
// arr.pop(100)
// arr.push(600)
// arr.push(1000)
// arr.shift()
// arr.shift(200)
// arr.unshift(900)
// arr.pop()
// console.log(arr.length)

// for (i = 0; i <arr.length; i++){
//     console.log(arr[i]*2)
// }

// // let arr = [5,6,7,8,9,10]
// // for (i = 0; i<arr.length; i++){
// //     console.log(arr[i]*2)
// // }

// console.log(arr.map((e,i) =>{
//     return e*5
// }))

// arr.map(function(e,i){
//     console.log(e*8)
// })

// console.log(
//     arr.map(function(e,i){
//         return e*4;
//     })
// );

// arr.map(function(e,i){   //e->Element and i -> index
//     if(i % 2 == 0){
//         console.log(e*6);
//     }
//     else{
//         console.log(e*3);
//     }
// })

// // Function ---------------->>

// function abc(a){
//     return a
// }
// console.log(abc(100));

// function sum(a,b){
//     return a+b
// }
// console.log(sum(5,4))

// function sum(e,i){
//     return e
// }
// console.log(sum(4,6))

// function sum(e,i){
//     console.log(e*9);
// }
// sum(52,9)
// sum(2,9)

// var arr1 = [2,4,5,6]

// console.log(arr.forEach((e,i) =>{
//     return e*i
// }))

// ----------------------------> not return arr or undefined or rturn nothing
// console.log(arr.forEach((e,i)=>{
//     return e*i;
// }))
// console.log(arr.map((e,i)=>{
//     return e*i;
// }))

// >>>>>>>>>Slicing>>>>>>>

let arr = [10,20,30,40,50,60,90,89]

console.log(arr.slice(5));

console.log(arr.slice(2, arr.indexOf(40)+1))

console.log(arr.slice(3,-3))



