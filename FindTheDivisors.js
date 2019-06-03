function divisors(integer) {
    lst = [];

    for(let i=2;i<integer;i++){
        if(integer%i===0){
            lst.push(i)
        }
    }
    if(lst.length>0){
        return lst
    }
    else{
        return integer+" is prime"
    }


}