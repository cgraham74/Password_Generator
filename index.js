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

function generatePassword() {
  let regPass = characters;
  let password = "";
  let passWordLength = "";

  if (!hasNumbers.checked) {
    regPass = regPass.filter((char) => !/[0-9]/.test(char));
  }
  if (!hasSymbols.checked) {
    regPass = regPass.filter((char) => !/([^\w ]|_)/g.test(char));
 
  }

  if (passLength.value > 0) {
    passWordLength = passLength.value;
  } else {
    passWordLength = 15;
  }

  for (let i = 0; i < passWordLength; i++) {
    password += generateRandomNum(regPass);
  }
  return password;
}

function generateRandomNum(regPass) {
  let randomChar = regPass[Math.floor(Math.random() * regPass.length)];
  return randomChar;
}

function displayPassword() {
  firstPass.textContent = "";
  secondPass.textContent = "";
  firstPass.textContent = generatePassword();
  secondPass.textContent = generatePassword();
}

function copyFirstPassword() {
  navigator.clipboard.writeText(firstPass.textContent);
}

function copySecondPassword() {
  navigator.clipboard.writeText(secondPass.textContent);
}

