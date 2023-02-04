const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const firstPass = document.getElementById("first-pass");
const secondPass = document.getElementById("second-pass");

function generatePassword(){
   let pass = ""; 
    for (let i = 0; i < 15; i++){
    pass += generateRandomNum();
    }
    return pass;
}

function generateRandomNum(){
    let randomNum = characters[Math.floor(Math.random() * characters.length)];
    return randomNum;
}

function displayPassword(){
    firstPass.textContent = "";
    secondPass.textContent = "";
    firstPass.textContent = generatePassword();
    secondPass.textContent = generatePassword();
}
