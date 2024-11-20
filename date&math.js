//date methods
let a=new Date();
console.log(a)
console.log(a.getFullYear())
console.log(a.getMonth())
console.log(a.getDay())
console.log(a.getHours())
console.log(a.getMinutes())
console.log(a.getSeconds())
console.log(a.getMilliseconds())
console.log(a.toDateString())
console.log(a.toTimeString())
console.log(a.toLocaleDateString())
console.log(a.toLocaleTimeString())

//math functions

let b=10.4
console.log(Math.round(b))
let c=2.4
console.log(Math.ceil(c))
let d=11.6
console.log(Math.floor(d))
let e=125
console.log(Math.sqrt(e))
let z=13
console.log(Math.pow(z,2))
const x=-10.5
console.log(Math.abs(x))
console.log(Math.min(20,30,44,22,13,10))
console.log(Math.max(20,30,44,22,13,10))
console.log(Math.random()*25)
console.log(Math.trunc(5.4))

//es6 features
 //arrow functions
const name=()=>console.log("thanay")
name()
//default-parameter
function g(x,y,z=1000){
    console.log(x+y+z)
}
g(50,100)
//template literals
let n="thanay"
function o(){
    console.log(`hi ${n} how are you...!`)
}
o()