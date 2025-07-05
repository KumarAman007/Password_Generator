const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordE1 = document.getElementById("password-el-1")
let passwordE2 = document.getElementById("password-el-2")

function generatePassword() {
    let password1= "";
    let password2= "";
    var inputEl = document.getElementById("user-el").value
    let Length = parseInt(inputEl)
    if(isNaN(Length)|| Length<=0)
        {
            alert("Please enter the valid password!")
            return
        } 
    for( let i = 0; i<Length; i++){
        password1 += characters[Math.floor(Math.random() * characters.length)]
        password2 += characters[Math.floor(Math.random() * characters.length)]
    }
passwordE1.textContent = password1
passwordE2.textContent = password2
}

function myFunction(generatePassword){
    var copyText = document.getElementById("password-el-1")
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}