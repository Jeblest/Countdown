const summerBreakEnd = new Date("1 January 2024") ;
function countdown() {
    const currentDate = new Date().getTime();
    const diff = summerBreakEnd.getTime() - currentDate;
    const secs = Math.floor(diff / (1000)%60);
    const minutes = Math.floor((diff / (60*1000))%60);
    const hours = Math.floor(diff / (60*1000*60)%24);
    const days = Math.floor((diff / (60*60*1000*24)));
    document.querySelector(".day").innerHTML = days;
    document.querySelector(".hour").innerHTML = hours;
    document.querySelector(".minute").innerHTML = minutes;
    document.querySelector(".sec").innerHTML = secs;
}



setInterval(countdown, 1000);