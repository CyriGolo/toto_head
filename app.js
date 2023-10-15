let buttonMoins = document.querySelector("#moins");
let buttonPlus = document.querySelector("#plus");
let buttonReset = document.querySelector("#reset");
let number = document.querySelector("#number");
let total = 0

// CONDITION
function condition() {
    if (total === 0){
        number.style.fontWeight = "bold";
        number.style.backgroundColor = "";
        number.style.color = "brown";
    } else if (total % 2 == 0) {
        number.style.fontWeight = "bold";
        number.style.backgroundColor = "";
        number.style.color = "";
    } else {
        number.style.fontWeight = "normal";
        number.style.backgroundColor = "black";
        number.style.color = "white";
    }
}

condition()

// BOUTTON -
buttonMoins.addEventListener("click", ()=>{
    if (total != -10){
        total--;
        number.innerHTML = total;
        buttonPlus.disabled = false
        condition()
        if(total === -10) {
            buttonMoins.disabled = true
        }
    }
})

// BOUTTON +
buttonPlus.addEventListener("click", ()=>{
    if (total != +20){
        total++;
        number.innerHTML = total;
        buttonMoins.disabled = false
        condition()
        if(total === 20) {
            buttonPlus.disabled = true
        }
    }
})

// BOUTTON RESET
buttonReset.addEventListener("click", ()=>{
    total = 0;
    buttonMoins.disabled = false
    buttonPlus.disabled = false
    number.innerHTML = total;
    condition()
})