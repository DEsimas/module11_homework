let ctr = 0, ID = setInterval(function(begin, end){
    begin += begin < end ? ctr++ : ctr--;
    console.log(begin);
    if(begin == end) clearInterval(ID);
}, 1000, 5, 5);