currentColor = "red"

function changeButtonColor(id) {
    if (currentColor == "red") {
        document.getElementById(id).style.background = "rgb(255, 255, 0)";
        currentColor = "yellow"
    } else if (currentColor == "yellow") {
       document.getElementById(id).style.background ="rgb(0, 128, 0)";
       currentColor = "green"
    } else {
       document.getElementById(id).style.background = "rgb(255, 0, 0)";
       currentColor = "red"
    }
}

function startTimer(id) {
    setInterval(changeButtonColor, 5000, id)
}