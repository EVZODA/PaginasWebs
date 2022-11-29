function startTime() {
    const today = new Date();
    let d = today.getDay();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    switch (d) {
        case 1:
            d = 'Mon';
            break;
        case 2:
            d = 'Tue';
            break;
        case 3:
            d = 'Wed';
            break;
        case 4:
            d = 'Thu';
            break;
        case 5:
            d = 'Fri';
            break;
        case 6:
            d = 'Sat';
            break;
        case 7:
            d = 'Sun';
            break;
    }
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('.day').innerHTML = d
    document.querySelector('.hours').innerHTML = h
    document.querySelector('.minutes').innerHTML = m
    document.querySelector('.seconds').innerHTML = s
}
startTime();
setInterval(startTime, 1000);
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}