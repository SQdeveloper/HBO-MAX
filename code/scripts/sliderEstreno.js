const sliderM = document.querySelector(".estreno .sliderMove");
const buttons = document.querySelectorAll(".estreno .cont-buttons button");
const tablero = document.querySelector(".estreno .cont-buttons span");
let number = 0;

buttons[0].addEventListener("click", ()=>{
    number--;
    buttons[1].style.zIndex = 1;
    moveSlider(number);
    if(number == 0) {
        buttons[0].style.zIndex = -1;
    }
    tablero.textContent = `${number+1} / 4`;
});

buttons[1].addEventListener("click", ()=>{
    number++;
    buttons[0].style.zIndex = 1;
    moveSlider(number)
    if(number == 3) {
        buttons[1].style.zIndex = -1;
    }
    tablero.textContent = `${number+1} / 4`;
});

function moveSlider() {
    sliderM.style.transform = `translateX(-${25*number}%)`;
}