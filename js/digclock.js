function currentTime(){
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;
    if(sec<10){
        sec = "0" + sec;
    }
    if(min<10){
        min = "0" + min;
    }
    if(hr==12){
        ampm = "PM";
    }
    else if (hr>12){
        hr -= 12;
        ampm = "PM";
    }
    else {
        ampm = "AM";
    }
    var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var timeZoneSuffix = (timeZone === "America/Los_Angeles") ? " PT" : ""; // Adjust this based on how specific you want the check to be

    var time = hr + ":" + min + ":" + sec + " " + ampm + timeZoneSuffix;
    document.getElementById("clock").innerText = time;
    setInterval(currentTime,1000)
}

currentTime();