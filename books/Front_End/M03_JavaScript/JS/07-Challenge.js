// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
  let passwordLength;
  let includeUpperCase;
  let includeLowerCase;
  let includeNumbeer;
  let includeSpecialCharacter;

  passwordLength=parseInt(prompt("choice 8 to 128 "));
  if(isNaN(passwordLength)|| passwordLength<8|| passwordLength>128){
    alert('Choice again 8 to 128 ')
    return passwordLength;
    // parseInt(prompt("choice 8 to 128 "));
  };

  includeUpperCase= confirm('Upperase ?');
  includeLowerCase=confirm('lowercase ?');
  includeNumbeer=confirm('number ?');
  includeSpecialCharacter=confirm('specialCharacter ?');

  if(!includeUpperCase && !includeLowerCase && !includeNumbeer && !includeSpecialCharacter){
      alert('choice something')
      return ;
   
  }

  let availableChar="";
  if(includeUpperCase){
    availableChar+='ABCDEFGHIJKLMNOPQRWXYZ'
  }
  if(includeLowerCase){
    availableChar+='abcdefghijklmnopqrstuvwxyz'
  }
  if(includeNumbeer){
    availableChar+= '123456789'
  }
  if(includeSpecialCharacter){
    availableChar+='!@#$%^&*()-_=+'
  }


  let password="";
  for(let i=0; i<passwordLength; i++){
    let randomIndex= Math.floor(Math.random()* availableChar.length);
    password+= availableChar.charAt(randomIndex)
  }

  return password;
}


