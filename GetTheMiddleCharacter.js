function getMiddle(s)
{
    s = s.split('')
    len = s.length
    if(len===1){
        return s[0]
    }
    else if(len%2==0){
        return s[(len/2)-1]+s[len/2]
    }
    else{
        return s[Math.floor(len/2)]
    }
}

console.log(getMiddle("HIe"))