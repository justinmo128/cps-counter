document.getElementById("click").addEventListener("click", cpsRun)

let time = 0;
let timer = document.getElementById("timer");
let clickCount = 0;
let clickOut = document.getElementById("click-out");
let cpsOut = document.getElementById("cps-out");
let functionIsRunning = false;


function cpsRun() {
    if (!functionIsRunning) {
        reset();
        const startTimer = setInterval(() => {
            if (time > 0) {
                time--;
                timer.innerHTML = time;
            } else {
                timer.innerHTML = "-";
                calculateCPS();
                setTimeout(() => {functionIsRunning = false}, 1000);
                clearInterval(startTimer);
            }
        }, 1000)
    } else {
        cpsRunning();
    }
    functionIsRunning = true;
}

function reset() {
    clickCount = 0;
    time = 10;
    timer.innerHTML = time;
    cpsOut = "-";
}

function cpsRunning() {
    if (time > 0) {
        clickCount++;
        clickOut.innerHTML = clickCount;
    }
}

function calculateCPS() {
    let cps = clickCount / 10;
    document.getElementById("cps-out").innerHTML = cps;
}