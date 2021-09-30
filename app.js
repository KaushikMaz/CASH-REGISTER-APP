var checkBtn = document.querySelector("#check-btn")
var nextBtn = document.querySelector("#next")
var billAmount = document.querySelector("#bill-amount")
var billInput = document.querySelector(".bill-input")
var cashInput = document.querySelector(".cash-input")
var cashGiven = document.querySelector("#cash-given")
var divOutput = document.querySelector("#output")
var returnTable = document.querySelector(".return-table")
var numberNote = document.querySelectorAll(".no-of-notes")

const arrayOfNotes = [2000, 500 , 100 , 20, 10, 5, 1]


returnTable.style.display = "none"
cashInput.style.display = "none"

function clickHandlerNext(){
    divOutput.style.display = "none"
    if(billAmount.value > 0 ){
        nextBtn.style.display= "none"
        cashInput.style.display = "block"
    }
    else {
        divOutput.style.display = "block"
        divOutput.innerText = "Invalid bill amount! Please Enter a valid bill amount to proceed"
    }
}

function clickHandlerCheck(){

    divOutput.style.display = "none"
    returnTable.style.display = "none"

    if(Number(cashGiven.value)>Number(billAmount.value) && Number(billAmount.value)>0){
        returnTable.style.display = "block";
        const amountToReturn = cashGiven.value - billAmount.value
        calculateChange(amountToReturn)
    }
    else {

        divOutput.style.display = "block"
        returnTable.style.display = "none"

        if(Number(cashGiven.value)<Number(billAmount.value) && Number(cashGiven.value)> 0){
            divOutput.innerText = "Cash given is less than required Bill amount."
        }
        
        else if(Number(cashGiven.value) === Number(billAmount.value)){
            divOutput.innerText = "No amount should be returned."
        }
        else if(Number(billAmount.value)<0){
            divOutput.innerText = "Bill amount Entered is not valid. Please enter valid amount."
        }

        else {
            divOutput.innerText = "Cash given is not a valid amount. Please Enter the right amount"
            
        }

    }
}

function calculateChange(amountToReturn){
    let sum = 0
        for(let i=0; i<arrayOfNotes.length;i++){
            const noOfNotes = Math.trunc(amountToReturn/arrayOfNotes[i])
            numberNote[i].innerText = noOfNotes
            amountToReturn = amountToReturn % arrayOfNotes[i]
            sum += noOfNotes
        }
        numberNote[arrayOfNotes.length].innerText = sum
}
nextBtn.addEventListener("click",clickHandlerNext);
checkBtn.addEventListener("click",clickHandlerCheck);