function updateClock(){
    let now = new Date();
    let dname = now.getDay();
    let mo = now.getMonth();
    let dnum = now.getDate();
    let year = now.getFullYear();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let pe = 'AM';

    if (hour == 0) {
        hour = 12;
    } else if (hour > 12) {
        hour = hour - 12;
        pe = 'PM';
    }
    
    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    let weeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let ids = ["dayName", "month", "dayNum", "year", "hour", "min", "sec", "period"];
    let values = [weeks[dname], months[mo], dnum, year, hour, min, sec, pe];

    for(let i=0; i<ids.length; i++){
        document.getElementById(ids[i]).innerText = values[i];
    }
}

function initClock(){
    updateClock();
    setInterval('updateClock()', 1);
}