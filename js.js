const first = document.querySelector(".first");
const second = document.querySelector(".second");
const btn = document.querySelector(".btn");
const rateAgain = document.querySelector(".rate-again");
const result = document.querySelector(".result");
const ratings = document.querySelector(".stars");


btn.addEventListener("click",() => {
    first.style.display = "none";
    second.style.display = "unset";
})

rateAgain.addEventListener("click", () =>{
    first.style.display = "unset";
    second.style.display = "none";
    result.textContent = "5";
})
ratings.addEventListener("click",function (e) {
    if (e.target.classList.contains("stars-btn")) {
        result.textContent = e.target.textContent;
    }
})