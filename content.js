chrome.storage.sync.get("hourlyWage", function(response){
    var hourlyWage = Number(response.hourlyWage);
    console.log(hourlyWage);
    var workingHours = 7.5;
    var dailyWage = hourlyWage * workingHours;
    var yearlyWage = dailyWage * 251;
    var minuteWage = hourlyWage / 60;
    var secondWage = minuteWage / 60;
    
    var x = document.getElementsByClassName("price");
    for(var i = 0; i < x.length; i++){
        var str = x[i].innerHTML;
        var res = str.replace(",","");

        var regex = /[0-9]+(\.\d{2})?/;
        var results = res.match(regex);    	
        res = results[0];

        var price = Number(res);

        // check string converted into a real price value
        if(!(isNaN(price))){
            var numYears;
            var numDays;
            var numHours;
            var numSeconds;
        
            numYears = Math.floor(price/yearlyWage);
            price = price%yearlyWage;

            numDays = Math.floor(price/dailyWage);
            price = price%dailyWage;

            numHours = Math.floor(price/hourlyWage);
            price = price%hourlyWage;

            numMinutes = Math.floor(price/minuteWage);
            price = price%minuteWage;

            numSeconds = Math.floor(price/secondWage);
     	    
            var secondString = numSeconds + " Seconds";
            var minutesString = numMinutes + " Minutes";
            var hoursString = numHours + " Hours";
            var daysString = numDays + " Days";

	    if(numSeconds == 1){
	    	secondString = secondString.substring(0, secondString.length - 1);
	    } else if(numMinutes == 1){
	    	minutesString = minutesString.substring(0, minutesString.length -1);
	    } else if(numHours == 1){
	    	hoursString = hoursString.substring(0, hoursString.length -1);
	    } else if(numDays == 1){
	    	daysString = daysString.substring(0,daysString.length -1);
	    }

            var outputString;
            if(numDays != 0){
                outputString = daysString + " and " + hoursString;
            }else if(numHours != 0){
                outputString = hoursString + " and " + minutesString;
            }else if(numMinutes != 0){
                outputString = minutesString + " and " + secondString;
            }else{
                outputString = secondString;
            }
            x[i].innerHTML = outputString;
        }
    }
});
