colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 128, 0)"];
i = 0;

function changeButtonColor(id) {
    document.getElementById(id).style.backgroundColor = colors[(i + 1) % 3];
    ++i;
}

function startTimer(id) {
    setInterval(changeButtonColor, 5000, id)
}
