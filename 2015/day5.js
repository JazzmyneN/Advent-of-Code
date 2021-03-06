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
    input = input.split(" ");
    // Gross code
    // var ans = 0;
    // for (var i = 0; i < allStrings.length; i++) {
    //     var doubleLetter = false;
    //     var tripleLetter = false;
    //     // checks for doubles
    //     for (var k = 0; k < allStrings[i].length; k++) {
    //         for (var j = k + 2; j < allStrings[i].length; j++) {
    //             if (allStrings[i].slice(k, k + 2) === allStrings[i].slice(j, j + 2)) {
    //                 doubleLetter = true;
    //                 console.log(allStrings[i].slice(k, k + 2), allStrings[i].slice(j, j + 2))
    //             };
    //         };
    //     };
        
    //     for (var j = 1; j < allStrings[i].length; j++) {
    //         if (allStrings[i].charAt(k) === allStrings[i].charAt(k + 2)) {
    //             tripleLetter = true;
    //             console.log(allStrings[i].charAt(k) + " is equal to" + allStrings[i].charAt(k + 2))
    //         };
    //     };
    //     if (tripleLetter === true && doubleLetter === true) {
    //         ans++
    //     };
    // };

    // credit to Mr.Peck for the code
    var ans = 0;
    for (var x = 0; x < input.length; x++) { // for every item in input
        let pair = false; // flag for pairs
        let doubleLetters = false; // flag for double letters
        for (var i = 0; i < input[x].length; i++) { // for every letter in current index
            //compare every 2 letters to every other 2 letters
            for (var j = i + 2; j < input[x].length; j++) { // new index based on previous index
                if (input[x].slice(i, i + 2) === input[x].slice(j, j + 2)) { // compares first pair to next pair in second index, then second pair to every pair in second index
                    pair = true; // outputs true
                };
            };
            //check if it has a double 
            if (input[x].charAt(i) === input[x].charAt(i + 2)) { // checks if current input character is equal to the one 2 characters away
                doubleLetters = true; // outputs if double is found
            };
        };
        if (doubleLetters === true && pair === true) {
            ans++;
        };
    }; 
    output.innerHTML = ans;
};
