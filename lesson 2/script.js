const numX = parseInt(prompt('Write a number X from 0 - 100'));
const numM = parseInt(prompt('Write a number M from 0 - 100'));

if(!Number.isInteger(numX) || !Number.isInteger(numM)){
    alert('Try again')
    document.location.reload()
}else{
    let skipEven = confirm('Skip even?');

    let result = null;
    for(let i = numX; i <= numM; i++){
        if(skipEven && !(i % 2)){
            continue;  
        }
        result += i;
};
alert(result);
}




