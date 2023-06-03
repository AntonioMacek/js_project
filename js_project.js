var readlineSync = require('readline-sync');

let name = readlineSync.question("Hello User, What is your name? \n");
name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

console.log(`Hello ${name} I am a BMI calculator, designed to give you a rough estimate about your current BMI!:)\n`)

let weight = readlineSync.question(`Hello ${name}, could you please type in your current weight in kg?(example: 73)\n`);
weightInKilograms = parseInt(weight);

let height = readlineSync.question(`Hello ${name}, could you please type in your current height in cm?(example: 179)\n`);
heightInMeters = parseInt(height) / 100;


// function getBmi(height, weight){
//  return weight / (height * height);
// }

let bmi = weightInKilograms / (heightInMeters * heightInMeters)


if(bmi < 18.5 ){
    console.log(`underweight`)
} else if ( bmi >= 18.5 && bmi <= 24.9){
    console.log(`healthy range`)
}else if ( bmi >= 25 && bmi <= 29.9){
    console.log(`overweight`)
}else if ( bmi >= 30 && bmi <= 39.9){
        console.log(`obesity`)    
}else{
    console.log(`severe obesity`)
}        








// under 18.5 – This is described as underweight.
// between 18.5 and 24.9 – This is described as the 'healthy range'.
// between 25 and 29.9 – This is described as overweight.
// between 30 and 39.9 – This is described as obesity.
// 40 or over – This is described as severe obesity.