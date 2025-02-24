document.addEventListener("DOMContentLoaded", function() {
    const btns = document.querySelectorAll(".btn");
    btns.forEach(btn => {
        btn.addEventListener("mouseover", () => {
            btn.style.backgroundColor = "#ffaa00";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.backgroundColor = "#ffcc00";
        });
    });
});
