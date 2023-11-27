const zoom = document.querySelectorAll(".zoom")
const zoomback = document.getElementById("zoomback")
const zoomimg = document.getElementById("zoomimg")
const caption = document.getElementById("caption")

zoom.forEach(function(value) {
    value.addEventListener("click",kakudai);
});

function kakudai(e) {
    zoomback.style.display = "flex"
    zoomimg.setAttribute("src",e.target.getAttribute("src"));
    zoomimg.classList.add("deka")

    const imgCaption = e.target.getAttribute("data-caption");
    caption.innerText = imgCaption;
}

zoomback.addEventListener("click",modosu);

function modosu() {
    zoomback.style.display = "none";
    zoomimg.classList.remove("deka")
    caption.innerText = "";
}