let addValue = (num) => {
    let value = document.getElementById('display');
    value.innerHTML += num;
}
let calculate = () => {
    let value = document.getElementById('display');
        let result = eval(value.innerHTML); 
        value.innerHTML = result;
}
let allClear = () =>{
    let value = document.getElementById('display');
    value.innerHTML = '';
}
let del = () => {
    let display = document.getElementById('display');
    display.innerHTML = display.innerHTML.slice(0, -1); 
}
