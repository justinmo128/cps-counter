document.getElementById("click").addEventListener("click", cpsRun)

let timer = document.getElementById("timer");
let clickOut = document.getElementById("click-out");
let cpsOut = document.getElementById("cps-out");
let time = 0;
let clickCount = 0;
let functionIsRunning = false;


function cpsRun() {
    if (!functionIsRunning) {
        functionIsRunning = true;
        clickCount = 0;
        time = 10;
        timer.innerHTML = time;
        cpsOut = "-";
        const startTimer = setInterval(() => {
            if (time > 0) {
                time--;
                timer.innerHTML = time;
            } else {
                clearInterval(startTimer);
                timer.innerHTML = "-";
                calculateCPS();
                setTimeout(() => {functionIsRunning = false}, 1000);
            }
        }, 1000)
    } else if (time > 0) {
        clickCount++;
        clickOut.innerHTML = clickCount;
    }
}

function calculateCPS() {
    let cps = clickCount / 10;
    document.getElementById("cps-out").innerHTML = cps;
}