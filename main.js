// Array for capital letters chose
let capitalLettersPassword = ["a","b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","f","v","x","y","z", "~", "-", "=", ".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// No chose array
let vanillaPassword = ["a","b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","f","v","x","y","z", "~", "-", "=", ".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Nums array
let numsPassword = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array with passphrase words
let passphrasesArray = ["big", "bob", "go", "work"];
// Empty vars
let password="";
let passphrase="";
//Generate password
function generatePassword(signCount, source){
    password = "";
    for(let i=0; i<signCount; i++){
        password += source[Math.floor(Math.random()*source.length)];

    }
    document.getElementById("password-input").value = password;
}
//Generate passphrase
function generatePassphrase(separator, source){
    passphrase = "";
    for(let i=0; i<3; i++){
        passphrase += source[Math.floor(Math.random()*source.length)];
        if(i===2){
            // pass
        }else{
            passphrase += separator;
        }
    }
    document.getElementById("password-input").value = passphrase;
}

document.getElementById("generate-btn").onclick = function(){
    if(document.getElementById("capital-letters-checkbox").checked){
        generatePassword(parseInt(document.getElementById("nums-input").value), capitalLettersPassword);
    }else
    if(document.getElementById("only-numbers-checkbox").checked){
        generatePassword(parseInt(document.getElementById("nums-input").value), numsPassword);
    }else
    if(document.getElementById("passphrase-checkbox").checked){
        generatePassphrase(document.getElementById("separator-word").value, passphrasesArray);
    }
    else{
        generatePassword(parseInt(document.getElementById("nums-input").value), vanillaPassword);
    }
}

