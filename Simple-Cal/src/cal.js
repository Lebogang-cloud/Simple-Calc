function add(... args){
    var sum = 0;
    var i = 0;
    while(i < args.length){
       sum += args[i];
       i++;
    }
    return sum;
}
console.log(add(1,2,3,4));

function multiply(...args){
    var product = 1;
    var i = 0;
    while(i < args.length){
       product *= args[i];
       i++;
    }
    return product;
    
}
console.log(multiply(1,2,3,4));


module.exports = {
    add, multiply
}
