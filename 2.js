function isSimple(value){
    if(value <= 1000)
    {
        value = value < 0 ? -1*value: value;
        for(let i = 2; i < value; i++)
            if(Number.isInteger(value/i))
                return ("Число не простое");
        value != 0 ? console.log("Число простое") : console.log("Число не простое");
    }
    else console.log("Данные неверны");
};

isSimple(prompt());