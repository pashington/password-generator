const items = ["bob", "go", "big", "wrap", "work", "a","b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","f","v","x","y","z", "~", "-", "=", ".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function generatePassword(signCount, source){
    let password = "";
    for(let i=0; i<signCount; i++){
        password += source[Math.floor(Math.random()*source.length)];
    }
    document.getElementById("password-input").value = password;
}
//Generate passphrase
function generatePassphrase(separator, source){
    let passphrase = "";
    for(let i=0; i<3; i++){
        passphrase += source[Math.floor(Math.random()*source.length)];
        if(i<2){
            passphrase+=separator;
        }
    }
    document.getElementById("password-input").value = passphrase;
}

const generateButton = document.getElementById("generate-btn");
const capitalLettersCheckbox = document.getElementById("capital-letters-checkbox");
const onlyNumsCheckbox = document.getElementById("only-numbers-checkbox");
const passphraseCheckbox = document.getElementById("passphrase-checkbox");
const separatorInput = document.getElementById("separator-word");
const numsInput = document.getElementById("nums-input");

// Event listeners on clicks to disable other inputs
passphraseCheckbox.addEventListener("click", function(){
    if(passphraseCheckbox.checked){
        capitalLettersCheckbox.checked = false;
        onlyNumsCheckbox.checked = false;
    }
});
onlyNumsCheckbox.addEventListener("click", function(){
    if(onlyNumsCheckbox.checked){
        passphraseCheckbox.checked = false;
        capitalLettersCheckbox.checked = false;
    }
});
capitalLettersCheckbox.addEventListener("click", function(){
    if(capitalLettersCheckbox.checked){
        passphraseCheckbox.checked = false;
        onlyNumsCheckbox.checked = false;
    }
});
// Generate logic
generateButton.onclick = function(){
    switch(true){
        case capitalLettersCheckbox.checked:
            generatePassword(parseInt(numsInput.value), items.slice(5));
            break;
        case onlyNumsCheckbox.checked:
            generatePassword(parseInt(numsInput.value), items.slice(35, 45));
            break;
        case  passphraseCheckbox.checked:
            generatePassphrase(separatorInput.value, items.slice(0,5));
            break;
        default:
            generatePassword(numsInput.value, items.slice(5,40));
            break;
    }
}

