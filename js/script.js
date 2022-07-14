function changeImage(event) {
    const box = document.querySelector(".thumb-img").children;

    for (let i = 0; i < box.length; i++) {
        box[i].classList.remove("active");
    }
    event.classList.add("active");

    document.querySelector(".img").src = event.children[0].src;
}
