/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const convertBtn = document.getElementById("convert-btn")
const errorMessage = document.getElementById("error-el")
let userValue = ""
let inputElement = document.getElementById("input-value")
let  paraLength = document.getElementById("p-length")
let  paraVolume = document.getElementById("p-volume")
let  paraMass = document.getElementById("p-mass")

convertBtn.addEventListener("click", function() {
    userInput = inputElement.value
    userValue = Number(userInput)
    
    if (userValue) {
        paraLength.innerHTML = `
        <p class="paragraph" id="p-length">
            ${userValue} meters = ${(userValue*3.281).toFixed(3)} feet | 
            ${userValue} feet = ${(userValue/3.281).toFixed(3)} meters 
        </p>
        `
        paraVolume.innerHTML = `
         <p class="paragraph" id="p-volume">
            ${userValue} litres = ${(userValue*0.264).toFixed(3)} gallons | 
            ${userValue} gallons = ${(userValue/0.264).toFixed(3)} litres 
         </p>
        `
        paraMass.innerHTML = `
            <p class="paragraph" id="p-mass">
                ${userValue} kilos = ${(userValue*2.204).toFixed(3)} pounds | 
                ${userValue} pounds = ${(userValue/2.204).toFixed(3)} kilos 
            </p>
            `
    } 
    else {
        errorMessage.innerHTML = `<p class="error-p" id="error-el">Error! Enter a valid number!</p>`
        paraLength.innerHTML = ""
        paraMass.innerHTML = ""
        paraVolume.innerHTML = ""
    }
    document.getElementById("input-value").value = ""
})

