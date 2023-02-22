const sliderMove = document.querySelector(".planes .sliderMove");
const barras     = document.querySelectorAll(".planes .barra");

barras.forEach((barra, index)=>{
    barra.addEventListener("click", ()=>{
        move(index);
        barras[0].style.backgroundColor = "white";
        barras[1].style.backgroundColor = "white";
        barra.style.backgroundColor = "var(--purple)";
    });
});

function move(number) {
    sliderMove.style.transform = `translateX(-${50*number}%)`;
}