let equalPressed = 0;
let buttonInput = document.querySelectorAll(".button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let earase = document.getElementById("earase");

window.onload = () =>{
    input.value = "";
};

buttonInput.forEach((buttonClass) => {
    buttonClass.addEventListener("click", () => {
        if(equalPressed === 1){
            equalPressed = 0;
        }
        input.value += buttonClass.value;
    });
});

equal.addEventListener("click", () =>{
    equalPressed =1;
    let inputValue = input.value;
    try{
        console.log(inputValue)
        let solution = eval(inputValue);
        if(Number.isNaN(solution) || !Number.isFinite(solution)){
            throw new Error("Invalid mathematical expression");
        }
        if(Number.isInteger(solution)){
            input.value = solution;
        }
        else {
            input.value = solution.tofixed(2);
        }
    }
    catch(error){
        alert(error.message);
    }
});
  clear.addEventListener("click", () => {
    input.value = "";
});
earase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});
  clear.addEventListener("click", () => {
    input.value = "";
});
earase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});
