function towerBuilder(nFloors) {
    let lst = [];
    if(nFloors===1){
        return ["*"]
    }
    else{
        let x = 1;
        let star = "*";
        for(let i = 0;i<nFloors;i++){
            let rando = nFloors-i-1;
            let space = " ".repeat(rando);
            if(i===nFloors-1){
                lst.push(star.repeat(x))
            }
            else if(i===0){
                lst.push(space+"*"+space)
            }
            else{
                lst.push(space+star.repeat(x)+space)
            }
            x+=2;
            space--;
        }
    }

    lst.forEach(function (item) {
        console.log(item)
    })
    // build here
    //return lst

}

towerBuilder(3)