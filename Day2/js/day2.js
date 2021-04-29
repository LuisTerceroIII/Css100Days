/*Challenge #41*/
const mainBox = document.getElementById("main-box");

mainBox.onload = () => {
    if(mainBox.classList.contains("firstState")) {
        mainBox.classList.remove("firstState")
        mainBox.classList.add("lastState")
    }
}

setInterval(() => mainBox.onload(undefined),1000)
