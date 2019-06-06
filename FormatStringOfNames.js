function list(names){
    if(names.length===0){
        return ""
    }
    else if(names.length===1){
        return names[0].name
    }
    else if(names.length===2){
        return names[0].name+" & "+names[1].name
    }
    let result = '';
    for(let i=0;i<names.length-2;i++){
        if(i===0){
            result +=names[i].name
        }else {
            result+= ", "+names[i].name
        }
    }
    result+=", "+ names[names.length-2].name+" & "+names[names.length-1].name;
    return result
}

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]);