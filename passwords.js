const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Welcome User!")

reader.question("What is your password?", function(password){
    if (password.length >= 10){
        console.log("Great! This is your password.")
    } else {
        console.log("Sorry your password has to be more than 10 characters long.")
    }
    reader.close()
}) 