const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const firstPass = document.getElementById("first-pass");
const secondPass = document.getElementById("second-pass");
const passLength = document.getElementById("length");
let hasSymbols = document.getElementById("symbols");
let hasNumbers = document.getElementById("numbers");

function generatePassword(){
    let password = ""; 
    let passWordLength = "";
   if(hasNumbers.checked === true){
    console.log("numbers is checked");
   } 
   if (hasSymbols.checked === true){
    console.log("Symbols is checked");
   }
    if (passLength.value > 0) {
        passWordLength = passLength.value;
    } else {
        passWordLength = 15;
    }
    for (let i = 0; i < passWordLength; i++){
    password += generateRandomNum();
    }

    return password;
}

function generateRandomNum(){
    //if want symbols

    //if want numbers

    //If want both
    let randomChar = characters[Math.floor(Math.random() * characters.length)];
    return randomChar;
}

function displayPassword(){
    firstPass.textContent = "";
    secondPass.textContent = "";
    firstPass.textContent = generatePassword();
    secondPass.textContent = generatePassword();
}

function copyFirstPassword(){
    console.log("First Length:" + firstPass.textContent.length);
    console.log("First pw:" + firstPass.textContent);
    navigator.clipboard.writeText(firstPass.textContent);
}

function copySecondPassword(){
    console.log("Second Length: " + secondPass.textContent.length);
    console.log("Second pw: " + secondPass.textContent);
    navigator.clipboard.writeText(secondPass.textContent);
}