var x = document.getElementsByClassName("price");
for(var i = 0; i < x.length; i++){
        var str = x[i].innerHTML;
        var res = str.replace(",","");

	var regex = /[0-9]+(\.\d{2})?/;
	var results = res.match(regex);    	
	res = results[0];

	var hourlyWage = 25;
        var workingHours = 7.5;
        var dailyWage = hourlyWage * workingHours;
        var yearlyWage = dailyWage * 251;
    	var minuteWage = hourlyWage / 60;
        var price = Number(res);

        // check string converted into a real price value
        if(!(isNaN(price))){
            var numYears;
            var numDays;
            var numHours;
        
            numYears = Math.floor(price/yearlyWage);
            price = price%yearlyWage;

            numDays = Math.floor(price/dailyWage);
            price = price%dailyWage;

            numHours = Math.floor(price/hourlyWage);
            price = price%hourlyWage;

	    numMinutes = Math.floor(price/minuteWage);
 
	    var minutesString = numMinutes + " Minutes";
            var hoursString = numHours + " Hours";

	    var outputString;
            if(numDays != 0){
                outputString = numDays + " Day(s) and " + hoursString;
            }else if(numHours != 0){
	    	outputString = hoursString + " and " + minutesString;
	    }else{
	    	outputString = minutesString;
	    }

            x[i].innerHTML = outputString;
        }
}
