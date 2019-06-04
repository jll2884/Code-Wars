//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count =0;
    let lst = [':)',';)',';D',':^D',';^)',':-D',':D',';-D',':~)',';~D',';~)',':-)',':~D',';-)'];
    for(let i =0;i<arr.length;i++){
        if(lst.includes(arr[i])){
            count++
        }

    }
    return count;

}