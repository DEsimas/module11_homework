let boolCounter = 0, strCounter = 0, oddCounter = 0, evenCounter = 0, zeroCounter = 0;
let arr = [4,6,4,5,5,"gfdh","dftg","f",1,true,0,"dfs",5,0];

function valueCounter(){
arr.forEach(function(item, index, array){
    if(item === true || item === false)
        boolCounter++;
    else if(!isNaN(+item) && item != 0)
        item % 2 == 0 ? evenCounter++ : oddCounter++;
    else if(item === 0)
        zeroCounter++;
    else
        strCounter++;
});
}

valueCounter();

console.log(`Логические значения: ${boolCounter}\nСтроки: ${strCounter}\nЧётные числа: ${evenCounter}\nНечётные числа: ${oddCounter}\nНули ${zeroCounter}`);