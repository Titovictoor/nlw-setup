const checkbox = document.querySelector("#checkbox")

function click() {
    document.body.classList.toggle("dark")   
}

checkbox.addEventListener("change", click);
