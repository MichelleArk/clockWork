var x = document.getElementsByClassName("price");
for(var i = 0; i < x.length; i++){
        var str = x[i].innerHTML;
        var pos = str.indexOf("$");
        var res = str.slice(pos+1);
        while(res[0] == " "){
                res = res.slice(1);
        }
        res = res.trim();
        res = res.replace(",","");
    
        var hourlyWage = 25;
        var workingHours = 7.5;
        var dailyWage = hourlyWage * workingHours;
        var yearlyWage = dailyWage * 251;
    
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
            
            var outputString = numHours + " Hours";
            if(numDays != 0){
                outputString = numDays + " Day(s) and " + outputString;
            }

            x[i].innerHTML = outputString;
        }
}
