let back_skill = document.querySelectorAll(".back_skill");
let paras = document.querySelectorAll(".skills1 .para_skill");

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

for (let i = 0; i < back_skill.length; i++) {
    let back = back_skill[i];
    if (i < paras.length) {
        paras[i].textContent = `${back.getAttribute('data-height')}%`;
    }
    back.style.height = `${back.getAttribute('data-height')}%`;
}