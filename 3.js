function sum(value1){
    return function(value2){
        return value1 + value2;
    }
}
console.log(sum(5)(6));
