const cardArray = document.querySelectorAll(".card");

cardArray.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
        console.log("active");
    });
});