//let pow = (x, n) => Math.pow(x,n);
let pow = (x, n) =>{
    let res = 1;
    for(let i = 0; i < n; i++)
        res = res * x;
    return res;
}
console.log(pow(2,8));