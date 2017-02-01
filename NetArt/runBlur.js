// get current date
var curDate = new Date();

var testData = {
    "results": {
        "sunrise":"7:27:02 AM",
        "sunset":"5:05:55 PM",
        "solar_noon":"12:16:28 PM",
        "day_length":"9:38:53",
        "civil_twilight_begin":"6:58:14 AM",
        "civil_twilight_end":"5:34:43 PM",
        "nautical_twilight_begin":"6:25:47 AM",
        "nautical_twilight_end":"6:07:10 PM",
        "astronomical_twilight_begin":"5:54:14 AM",
        "astronomical_twilight_end":"6:38:43 PM"
    },
    "status":"OK"
}

var dayArray = testData.results.day_length.split(":");  

console.log(dayArray);

var dayHours = parseInt(dayArray[0]);
var dayMin = parseInt(dayArray[1]);
var daySec = parseInt(dayArray[2]);

var dayTotal = dayHours*60*60 + dayMin*60 + daySec;

console.log(dayTotal);

// get sunrise today
// get sunset today

// blurriness range = sunrise - sunset

// clearest = sunrise
// text-shadow: 0 0 1px rgba(255,255,255,0.5);

// blurriest = sunset
// text-shadow: 0 0 10px rgba(255,255,255,0.5);


// FIND MAPPING RANGES
// get seconds from sunrise to sunset (SRSS)
// get seconds from sunset to sunrise (SSSR)

// GET MAPPED VALUE
// if greater than sunrise but less than sunset
// getting blurrier
// map(current time, 0, SRSS, 10, 1);

// if after sunset and less than sunrise
// getting clearer
// map(current time, 0, SSRS, 1, 10);

var blurVal = 10;

var t = setInterval(updateBlur,1000);

function updateBlur() {
	var value = "0 0 " + blurVal + "px rgba(255,255,255,0.5)";
	$(".word").css("text-shadow", value);

	if (blurVal != 0) {
		blurVal = blurVal - 0.5;
	} else {
		clearInterval(t);
		console.log("ended unblur");
	}
	
}