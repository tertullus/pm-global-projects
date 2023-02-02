function whoIsBuying(names) {
    let seed = Math.floor((Math.random() * names.length));
    return(names[seed] + " is buying lunch today!");
}

whoIsBuying(["Mike", "Jane", "Tarzan", "Ben", "Angela"]);