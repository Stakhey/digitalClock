function realTime(){ 
    // Grabs browser date and time for variables
    const d = new Date();
    let date = new Date();
    let hh = date.getHours(); // 0-23
    let mm = date.getMinutes(); // 0-59
    let ss = date.getSeconds(); // 0-59
    let meridian = "AM";

    // Sets to PM if time is past noon
    if (hh >= 12) {
        meridian = "PM";
    }

    // Concatenates 0 to time if it is a single digit
    if (hh < 10) { 
        hh = "0" + hh;
    } 
    if (mm < 10) { 
        mm = "0" + mm;
    } 
    if (ss < 10) { 
        ss = "0" + ss;
    }

    // Assembles all variables into a single variable
    var time = hh + ":" + mm + ":" + ss + " " + meridian; 

    // Puts 
    document.getElementById("head").innerHTML = time;
    document.getElementById("hours").innerHTML = hh;
    document.getElementById("minutes").innerHTML = mm;
    document.getElementById("seconds").innerHTML = ss;
    document.getElementById("meridian").innerHTML = meridian; 
    document.getElementById("date").innerHTML = d.toDateString();

    // Refreshes time every minute
    var t = setTimeout(function(){ realTime()}, 1000)
}

realTime();