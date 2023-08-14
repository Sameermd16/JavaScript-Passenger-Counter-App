const countEl = document.getElementById('count-el')

function increment() {
    //increases the count 
    countEl.innerText = Number(countEl.innerText) + 1
}

function save() {
    const savedEntries = document.getElementById('save-el')
    savedEntries.innerText += countEl.innerText + '-'
    countEl.innerText = 0
}

// const quantity = '11.56'

// //does not works for floating point numbers => result is integer
// const convertByNOTOperand = ~~quantity
// console.log(convertByNOTOperand)



//works by divide, subtract 0 from str
// const multiplyQuantityByOne = quantity * 1
// console.log(multiplyQuantityByOne)
// console.log(typeof quantity)
// console.log(typeof +quantity)
// console.log(Number(quantity))
// const quantityInNum = Number(quantity)
// console.log(typeof quantityInNum)

// const quantityInNumWithParse = parseInt(quantity, 10)
// console.log(quantityInNumWithParse)
// console.log(typeof quantityInNumWithParse)

































// let count = 0;
// let countEl = document.getElementById("count-el");
// let saveEl = document.getElementById("save-el");

// //when clicked on increment button
// function increment() {
//     //increases count by 1
//     count = count + 1;
//     countEl.innerText = count;
// }

// //when clicked on save button 
// function save() {
//     //save's i.e. console log's the count
//     let countStr = count + " - ";
//     saveEl.textContent += countStr;
//     count = 0;
//     countEl.innerText = count;
// }

