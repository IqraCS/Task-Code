function func(arguments) {
    console.log(arguments);
    let sum = 0
    var highest =0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
        var average=sum/arguments.length;
    for (j = 0; j < arguments.length; j++) {
        if (arguments[j] > highest) {
        highest = arguments[j];
      }
        }
    //console.log(average)
   // console.log(highest)

    return [highest,average];
}
}
console.log(func([1, 2, 10, 8])); 
