//!.............................1

// const button = document.getElementById("btn")

// button.addEventListener("click",function(){
//     button.innerText = "ma shma"
// })

//!...............................2

// const btn1 = document.getElementById("btn1")
// const btn2 = document.getElementById("btn2")
// const btn3 = document.getElementById("btn3")
// const btn4 = document.getElementById("btn4")

// btn1.addEventListener("click",function(){
//     btn1.innerText = "ma shma"
// })

// btn2.addEventListener("click",function(){
//     btn2.innerText = "lama"
// })

// btn3.addEventListener("click",function(){
//     btn3.innerText = "aval"
// })

// btn4.addEventListener("click",function(){
//     btn4.innerText = "lo dea"
// })

//!.................................3

// const listItems = document.getElementsByClassName("buttons")

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener("click",function(){
//         console.log(listItems[i].innerText);
//     })

// }

//!.................................4-5

// const plusBtn = document.getElementById("plusBtn")
// const minusBtn = document.getElementById("minusBtn")
// const counter = document.getElementById("counter")
// let num = 0

// plusBtn.addEventListener("click",function(){
//     num++
//     counter.innerText = num
// })

// minusBtn.addEventListener("click",function(){
//     num--
//     counter.innerText = num
// })

//!..................................7.a

// const products = [
//   {
//     name: "avocado",
//     price: 3,
//     description: "this avocado is very tasty",
//   },

//   {
//     name: "cow milk",
//     price: 100,
//     description: "cow milk is the basic milk",
//   },

//   {
//     name: "banana",
//     price: 2,
//     description: "this are african bananas",
//   },
// ];


// let max = 0;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].price > max) {
//     max = products[i].price;
//   }
// }

// console.log(max);

//!.................................7.b

// let min = products[0].name;

// for (let i = 1; i < products.length; i++) {
//   if (products[i].price <= min) {
//     min = products[i].price;
//   }
// }

// console.log(min);



//!.................................7.c

// for (let i = 0; i < products.length; i++) {
//     products[i].price *= 0.7
// }

// console.log(products);
