let sandwitchCalculator = function (bread) {
    if (bread % 2 == 0) {
        return bread / 2;
    }
    else {
        return "breads is not in range";
    }
}
console.log("sandwitches : ", sandwitchCalculator(10));
function sandwitchCalculator1(bread, cheese) {
    if (bread % 2 == 0 && cheese > 1) {
        return bread / 2;
    }
    else if (bread % 2 == 0 && cheese == 1) {
        return 1;
    }
    else {
        return "breads is not enough";
    }
}
console.log("Total sandwitches made: ", sandwitchCalculator1(20, 1));