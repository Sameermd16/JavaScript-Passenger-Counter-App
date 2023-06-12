let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

//when clicked on increment button
function increment() {
    //increases count by 1
    count = count + 1;
    countEl.innerText = count;
}

//when clicked on save button 
function save() {
    //save's i.e. console log's the count
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.innerText = count;
}