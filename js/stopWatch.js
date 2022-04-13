let min = 0;
let sec = 0;
let count = 0;

let timer = false;

function start() {
    timer = true;
    stopwatch();
}

// function stop() {
//     timer = false;
// }

let stop = () => timer = false; // arrow function

function reset() {
    timer = false;

    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("second").innerHTML = '00';
    document.getElementById("minute").innerHTML = '00';
    document.getElementById("miliSecond").innerHTML = '00';
}

function stopwatch(){
    if(timer == true){
        count = count + 1;

        if(count == 100){
            sec = sec + 1;
            count = 0;
        }

        if(sec == 60){
            min = min + 1;
            sec = 0;
        }

        let minStr = min;
        let secStr = sec;
        let countStr = count;

        if(sec < 10){
            secStr = '0' + sec;
        }

        if(min < 10){
            minStr = '0' + min;
        }

        if(count < 10){
            countStr = '0' + count;
        }

        document.getElementById("second").innerHTML = secStr;
        document.getElementById("minute").innerHTML = minStr;
        document.getElementById("miliSecond").innerHTML = countStr;

        setTimeout("stopwatch()", 10);
    }
}