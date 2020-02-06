function day5a() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var allStrings = input.split(" ");
    function vowelCheck(str){
        var vowelCount = 0;
        for(var i = 0; i < str.length; i++){
            if (str.charAt(i) === "a"){
                vowelCount++;
            }
            else if (str.charAt(i) === "e"){
                vowelCount++;
            }
            else if (str.charAt(i) === "i"){
                vowelCount++;
            }
            else if (str.charAt(i) === "o"){
                vowelCount++;
            }
            else if (str.charAt(i) === "u"){
                vowelCount++;
            };
        };
        if (vowelCount > 2) {
            return true;
        } else {
            return false;
        };
    };
    function doubleCheck(str){
        var activeLetter = "";
        var letterCount = 0;
        var repeatLetter = false;
        for(var i = 0; i < str.length; i++){
            if(str.charAt(i) !== activeLetter) {
                activeLetter = str.charAt(i);
                letterCount = 1;
            } else {
                letterCount ++;
                if (letterCount === 2) {
                    repeatLetter = true;
                };
            };
        };
        if(repeatLetter === true) {
            return true;
        } else {
            return false;
        }
    };
    function forbiddenStr(str){
        var letterPairs = [];
        var letterPairCheck = false;
        for(var i = 0; i < str.length; i++){
            var newPair = (str.charAt(i) + str.charAt(i+1) + "");
            letterPairs.push(newPair);
        };
        for(var i = 0; i < letterPairs.length; i++){
            if ((letterPairs[i] === "ab") || (letterPairs[i] === "cd") || (letterPairs[i] === "pq") || (letterPairs[i] === "xy")) {
                letterPairCheck = false;
                break;
            }
            else {
                letterPairCheck = true;
            };
        };
        if (letterPairCheck === true){
            return true;
        } else {
            return false;
        }
    }
    var trueCount = 0; 
    for(var i = 0; i < allStrings.length; i++) {
        //counts all strings that pass tests
        if(vowelCheck(allStrings[i]) && doubleCheck(allStrings[i]) && forbiddenStr(allStrings[i])){
            trueCount++;
        };
    }
    output.innerHTML = trueCount;
};
function day5b() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var allStrings = input.split(" ");
    // It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
    // It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.
    // For example:
    // qjhvhtzxzqqjkmpb is nice because is has a pair that appears twice (qj) and a letter that repeats with exactly one letter between them (zxz).
    // xxyxx is nice because it has a pair that appears twice and a letter that repeats with one between, even though the letters used by each rule overlap.
    // uurcxstgmygtbstg is naughty because it has a pair (tg) but no repeat with a single letter between them.
    // ieodomkazucvgmuy is naughty because it has a repeating letter with one between (odo), but no pair that appears twice.
    function pairMaker(str){
        var letterPairs = [];
        var pairRepeat = [];
        for(var i = 0; i < str.length; i++) {
            var newPair = (str.charAt(i) + str.charAt(i+1));
            letterPairs.push(newPair);
        };

        var repeatCount = 0;
        var activePair = null;

        for(var i = 0; i < letterPairs.length; i++){
            if(letterPairs[i] !== activePair) {
                activePair = letterPairs[i];
                repeatCount = 1;
            } else {
                repeatCount ++;
                if (repeatCount === 2) {
                    pairRepeat.push(activePair);
                };
            };
        };
    
        letterPairs.pop();
        return(pairRepeat);
    };
    function tripletMaker(str){
        var letterTrip = [];
        var tripletRepeat = [];
        for(var i = 0; i < str.length; i++) {
            var newTrip = (str.charAt(i) + str.charAt(i+1) + str.charAt(i+2));
            letterTrip.push(newTrip);
            if(newTrip[0] === newTrip[2] && newTrip[1] !== newTrip[0]) {
                tripletRepeat.push(newTrip);
            }
        };
        return(tripletRepeat);
    };
    console.log(pairMaker(input));
    console.log(tripletMaker(input));
};