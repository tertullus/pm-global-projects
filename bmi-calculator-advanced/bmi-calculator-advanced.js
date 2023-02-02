function bmiAdvanced() {
    let weight = prompt("What is your weight?");
    let height = prompt("What is your height?");

    let BMI = weight / Math.pow(height, 2);
    if(BMI < 18.5) {
        return("Your BMI is " + BMI + ", so you are underweight.");
    } else if(BMI >= 18.5 && BMI <= 24.9) {
        return("Your BMI is " + BMI + ", so you have a normal weight.");   
    } else if(BMI > 24.9) {
        return("Your BMI is " + BMI + ", so you are overweight.");
    }
}

bmiAdvanced();