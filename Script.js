function pluss(){
    let element = document.getElementById('Output');
    let value = element.innerHTML;

    ++value;

    console.log(value);
    document.getElementById('Output').innerHTML = value;

}


function Minus(){
let element = document.getElementById('Output');
let value = element.innerHTML;

--value;

console.log(value);
document.getElementById('Output').innerHTML = value;


}