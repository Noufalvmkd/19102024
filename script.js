// let list=["html","javaScript","java","css"]
// let newList = list.filter(function(li){
//     return li.includes("html")
// })
// console.log(newList)

const fruits =["banana","grape","mango","banana1"]
const fruit = fruits.filter((a)=>{
    return a.includes("banana")
})
console.log(fruit)

// prompt

const list =["tea","coffee","milk","tea2"]
let userInput = prompt("please type")
const search= list.filter((c)=>{
    return c.includes(userInput)
})

console.log(search)
