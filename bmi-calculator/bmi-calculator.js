function BMI() {
    let weight = prompt("What is your weight?");
    let height = prompt("What is your height?");
    return("Your BMI is " + Math.round(weight / Math.pow(height, 2)));
}

BMI();