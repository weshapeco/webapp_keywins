 const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
   output: process.stdout
   
 })
 let cultureWinner = " "
 let reason = " " 
 let attempts = 3;
 let inputs = [];
 // our main  functions we need to call
 function AskKeyWins(){
    
   if (attempts == 3) {
        rl.question("Please enter your name: ", (name) => {  
            if (name.length < 2) { 
                console.log('Your name either would be empty or a character')
                AskKeyWins();
            } else {
                console.log(`Hello, ${name}, welcome to key wins!`);
                Question(name); 
            }   
        })

    } else {
    Question();
    }
}
 
 function Question(name){

    if (attempts > 0){
       rl.question(`Enter your key wins (${4 - attempts} of 3): `,(input) => { // the user enters their number of KeyWins
        inputs.push(input);
        attempts -= 1;
        Question(name);
            
        })  
    } else {
        
        for(let i=0; i<3; i++){
            console.log(`${i+1}: ${inputs[i]}`);
        }

        CultureWinner();
    }        
}

function CultureWinner(){
    
    rl.question("Who is your culture winner for this week? : ",(Input) =>{
        cultureWinner = Input
        if (cultureWinner.length < 2){
            console.log('The name of your culture winner is either blank or empty. Please try again.')
            CultureWinner();
        }
        else{
            rl.question(`Why is ${cultureWinner} your culture winner?: `, (Input2) =>{
                reason = Input2
                rl.close();
                console.log(`Your cultural winner is ${cultureWinner}`);
                console.log(`Reason: ${reason}`);
                console.log('Thank you for your key wins!');
                
            });
        }
       
    }); 
}
console.log("Hello! Welcome to key wins.");
AskKeyWins();

 