function day5a() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var allStrings = input.split(" ");

    function vowelCheck(str) {
        var vowelCount = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charAt(i) === "a") {
                vowelCount++;
            } else if (str.charAt(i) === "e") {
                vowelCount++;
            } else if (str.charAt(i) === "i") {
                vowelCount++;
            } else if (str.charAt(i) === "o") {
                vowelCount++;
            } else if (str.charAt(i) === "u") {
                vowelCount++;
            };
        };
        if (vowelCount > 2) {
            return true;
        } else {
            return false;
        };
    };

    function doubleCheck(str) {
        var activeLetter = "";
        var letterCount = 0;
        var repeatLetter = false;
        for (var i = 0; i < str.length; i++) {
            if (str.charAt(i) !== activeLetter) {
                activeLetter = str.charAt(i);
                letterCount = 1;
            } else {
                letterCount++;
                if (letterCount === 2) {
                    repeatLetter = true;
                };
            };
        };
        if (repeatLetter === true) {
            return true;
        } else {
            return false;
        }
    };

    function forbiddenStr(str) {
        var letterPairs = [];
        var letterPairCheck = false;
        for (var i = 0; i < str.length; i++) {
            var newPair = (str.charAt(i) + str.charAt(i + 1) + "");
            letterPairs.push(newPair);
        };
        for (var i = 0; i < letterPairs.length; i++) {
            if ((letterPairs[i] === "ab") || (letterPairs[i] === "cd") || (letterPairs[i] === "pq") || (letterPairs[i] === "xy")) {
                letterPairCheck = false;
                break;
            } else {
                letterPairCheck = true;
            };
        };
        if (letterPairCheck === true) {
            return true;
        } else {
            return false;
        }
    }
    var trueCount = 0;
    for (var i = 0; i < allStrings.length; i++) {
        //counts all strings that pass tests
        if (vowelCheck(allStrings[i]) && doubleCheck(allStrings[i]) && forbiddenStr(allStrings[i])) {
            trueCount++;
        };
    }
    output.innerHTML = trueCount;
};

function day5b() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var allStrings = input.split(" ");
    //splits think into pairs
    function doubleChecker(str) {
        var letterPairs = [];
        for (var i = 0; i < 15; i++) {
            var newPair = (str.charAt(i) + str.charAt(i + 1));
            letterPairs.push(newPair);
        };
        for (var k = 0; k < letterPairs.length; k++) {
            for (var j = 1; j < 15; j++) {
                if (letterPairs[k] === letterPairs[k + j]) {
                    return true;
                };
            };
        };
    };
    //splits think into triplets
    function tripletMaker(str) {
        var letterTrip = [];
        for (var i = 0; i < str.length; i++) {
            var newTrip = (str.charAt(i) + str.charAt(i + 1) + str.charAt(i + 2));
            letterTrip.push(newTrip);
        };

        for (var k = 0; k < 14; k++) {
            if (letterTrip[k].charAt(0) === letterTrip[k].charAt(2)) {
                return true;
            }
        };

    };
    
    var trueCount = 0;
    
    for (var i = 0; i < allStrings.length; i++) {
        //counts all strings that pass tests
        if (tripletMaker(allStrings[i]) &&  doubleChecker(allStrings[i])) {
            trueCount++;
        };
    }
    output.innerHTML = trueCount;
};