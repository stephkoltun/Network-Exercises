
var testData = {
    "results": {
        "sunrise": "2017-02-01T12:04:55+00:00",
		"sunset": "2017-02-01T22:14:30+00:00",
    },
    "status":"OK"
}

var sunrise = new Date(testData.results.sunrise);
console.log("sunrise: " + sunrise);
var sunset = new Date(testData.results.sunset);
console.log("sunset: " + sunset);

var daylength = sunset - sunrise;
console.log("daylength: " + daylength);

var t = setInterval(updateBlur,1000);

function updateBlur() {

	// get current date
	var curDate = new Date();
	curDate.setMonth(1);
	curDate.setDate(1);

	var curDiffAfterSunrise = curDate - sunrise;
	convertTimeDifference(curDiffAfterSunrise);
	
	Number.prototype.map = function (in_min, in_max, out_min, out_max) {
	  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
	}

	// gets blurrier further away from sunrise
	var blurVal = curDiffAfterSunrise.map(0, daylength, 1, 20);

	//var blurVal = map(curDiffAfterSunrise, 0, daylength, 10, 1);
	console.log(Math.round(blurVal*1000)/1000);

	var value = "0 0 " + blurVal + "px rgba(255,255,255,0.5)";
	$(".word").css("text-shadow", value);

}



function convertTimeDifference(diff) {
	var msec = diff;
	var hh = Math.floor(msec / 1000 / 60 / 60);
	msec -= hh * 1000 * 60 * 60;
	var mm = Math.floor(msec / 1000 / 60);
	msec -= mm * 1000 * 60;
	var ss = Math.floor(msec / 1000);
	msec -= ss * 1000;

	console.log("time past sunrise: " + hh + "h " + mm + "m " + ss + "s");
	// return array?
}













/*var sunriseArray = testData.results.sunrise.split(":");
var tempSec = sunriseArray[2].split(" ");
sunriseArray[2] = tempSec[0];


var sunRise = new Date();
sunRise.setHours(sunriseArray[0]);
sunRise.setMinutes(sunriseArray[1]);
sunRise.setSeconds(sunriseArray[2]);

var test = curTime - testData.results.sunrise;
console.log(curTime);*/



/*var dayArray = testData.results.day_length.split(":");  

console.log(dayArray);

var dayHours = parseInt(dayArray[0]);
var dayMin = parseInt(dayArray[1]);
var daySec = parseInt(dayArray[2]);

var dayTotal = dayHours*60*60 + dayMin*60 + daySec;
console.log(dayTotal);




console.log(sunriseArray);

var hoursDiff = curHours - sunriseArray[0];

console.log(timePos);

if (hoursDiff > 0) {
	// current time is after sunrise
} else if (hoursDiff == 0) {

}*/
// cur time after sunrise?


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

