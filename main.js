const Count = document.querySelector(".count-digit");
let number = 0;
let initialNumber = 0;

// HANDEL INCREASE BUTTON 
function handleIncrease() {
    let currentNumber = number + 1;
    number = currentNumber;
    Count.innerHTML = currentNumber;

    changeCountColor();
}


// HANDLE DECREASE BUTTON 
function handleDecrease() {
    let currentNumber = number - 1;
    number = currentNumber;

    Count.innerHTML = currentNumber;

    changeCountColor();
}


// HANDLE RESET BUTTON 
function handleReset() {
    number = initialNumber;
    Count.innerHTML = initialNumber;

    changeCountColor();
}


// CHANGE TEXT COLOR 
function changeCountColor() {
    if (number == 0) {
        Count.style.color = "white";
    } else if (number > 0) {
        Count.style.color = "green";
    } else if (number < 0) {
        Count.style.color = "red";
    }
}