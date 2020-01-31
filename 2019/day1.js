function day1a() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var sum = 0;
    // Fuel required to launch a given module is based on its mass. 
    // Specifically, to find the fuel required for a module, take 
    // its mass, divide by three, round down, and subtract 2
    //split input into seperate numbers (split)
    //put numbers into array (for loop + array)
    var yearsStr = input.split(" ");
    var yearsNum = yearsStr.map(Number)
    console.log(yearsNum);
    for (var i = 0; i < yearsNum.length; i++) {
        sum += (Math.floor((yearsNum[i]) / 3)) - 2;
    }
    output.innerHTML = sum;
}
function day1b() {
    // calculate its fuel and add it to the total. 
    // Then, treat the fuel amount you just calculated 
    // as the input mass and repeat the process, 
    // continuing until a fuel requirement is zero or 
    // negative. For example:
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var sum = 0;
    var totalFuel = 0;

    var yearsStr = input.split(" ");
    var yearsNum = yearsStr.map(Number)
    console.log(yearsNum);

    function remainingFuel() {
        for (var i = 0; i < yearsNum.length; i++) {
            newNum = (Math.floor((yearsNum[i]) / 3)) - 2;     
            while (newNum >= 0) {
                sum += newNum;
                console.log(newNum);
                newNum = Math.floor((newNum / 3) - 2);   
            } 
        }
        
        totalFuel += sum;
        output.innerHTML = totalFuel;
    }
    remainingFuel();
    output.innerHTML = totalFuel;
}
