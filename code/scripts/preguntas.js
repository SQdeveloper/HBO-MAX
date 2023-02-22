const buttonPlus = document.querySelectorAll(".preguntas .top button");
const parrafo    = document.querySelectorAll(".preguntas p");
const imgs        = document.querySelectorAll(".preguntas .top img");
let flag = [true, true, true, true, true];

buttonPlus.forEach((bt, index)=>{
    bt.addEventListener("click", ()=>{
        parrafo[index].classList.toggle("active");
        if(flag[index] === true) {
            imgs[index].src = "./rg/svg/dash.svg";
            flag[index] = false;
        }else {
            imgs[index].src = "./rg/svg/plus.svg"
            flag[index] = true;
        }
    });
});