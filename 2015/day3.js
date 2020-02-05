function day3a() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var y = 0;
    var x = 0;
    var directions = [];
    var coords = ["0 0"];
    directions = input.split("");
    for(i = 0; i < directions.length; i++){
        var horizontal = [];
        var vertical = [];
        if (directions[i] === "^") {
            y += 1;
            vertical.push(y);
        } else if (directions[i] === "v") {
            y -= 1;
            vertical.push(y);
        }
        if (directions[i] === ">") {
            x += 1;
            horizontal.push(x);
        } else if (directions[i] === "<") {
            x -= 1;
            horizontal.push(x);
        }
        coords.push(y + " " + x); //note: MAKE THE COORDS A STRING! ITS EASIER TO PARSE STRINGS THAN OBJECTS
    }
    uniqueCoords = new Set(coords); //remove duplicate entries
    output.innerHTML = uniqueCoords.size;
}
function day3b() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var y = 0;
    var x = 0;
    var y2 = 0;
    var x2 = 0;
    var directions = [];
    santa = ["0 0"];
    robosanta = ["0 0"];
    directions = input.split("");
    // for(i = 0; i < directions.length; i ++) {
    //     if(directions[i]%2 !== 0){
    //         santa.push(directions[i]);
    //     } else {
    //         robosanta.push(directions[i]);
    //     }
    // }
    // no  need to make new arrays, just check for odd and even
    for(i = 0; i < directions.length; i++){
        if(i%2 === 0){
       
            var horizontal = [];
            var vertical = [];
            if (directions[i] === "^") {
                y += 1;
                vertical.push(y);
            } else if (directions[i] === "v") {
                y -= 1;
                vertical.push(y);
            }
            if (directions[i] === ">") {
                x += 1;
                horizontal.push(x);
            } else if (directions[i] === "<") {
                x -= 1;
                horizontal.push(x);
            }
            santa.push(y + " " + x);
           
        }
        else {
            
            var horizontal = [];
            var vertical = [];
            if (directions[i] === "^") {
                y2 += 1;
                vertical.push(y2);
            } else if (directions[i] === "v") {
                y2 -= 1;
                vertical.push(y2);
            }
            if (directions[i] === ">") {
                x2 += 1;
                horizontal.push(x2);
            } else if (directions[i] === "<") {
                x2 -= 1;
                horizontal.push(x2);
            }
            robosanta.push(y2 + " " + x2);
            
        }
    }   
    uniqueRobosanta = new Set(robosanta); //remove duplicate entries
    uniqueSanta = new Set(santa); //remove duplicate entries
    output.innerHTML = uniqueSanta.size + uniqueRobosanta.size;
}