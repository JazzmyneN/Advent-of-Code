function day1a() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var directions = input.split(", ");
    var coords = [0, 0];
    var coordDirect = "NESW";
    var turn = 0;
    for (var i = 1; i < directions.length; i++) {
        var direct = directions[i].charAt(0);
        moves = Number(directions[i].substring(1, directions[i].length));
        if (direct === "R") {
            turn++;
        } else {
            turn--;
        }
        if (coordDirect[(turn) % coordDirect.length] === "N") {
            coords[1] += moves;
        } else if (coordDirect[(turn) % coordDirect.length] === "E") {
            coords[0] += moves;
        } else if (coordDirect[(turn) % coordDirect.length] === "S") {
            coords[1] -= moves;
        } else if (coordDirect[(turn) % coordDirect.length] === "W") {
            coords[0] -= moves;
        };
    };
    output.innerHTML = Math.abs(coords[0]) + Math.abs(coords[1]);
}
function day1b() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var directions = input.split(", ");
    var coords = ["0 0"];
    var newCoords = [];
    var newY = [];
    var coordDirect = "NESW";
    var x = 0;
    var y = 0;
    var turn = 0;
    for (var i = 0; i < directions.length; i++) {
        var direct = directions[i].charAt(0);
        var moves = Number(directions[i].substring(1, directions[i].length));
        if (direct === "R") {
            turn++;
        } else {
            turn--;
        };
        //positive direction values
        if (coordDirect[(turn) % coordDirect.length] === "N") {
            for (var j = 1; j < moves + 1; j++) {
                newCoords.push(x + " " + (y + j));
            }
            y += moves;
        } else if (coordDirect[(turn) % coordDirect.length] === "E") {
            for (var j = 1; j < moves + 1; j++) {
                newCoords.push((x + j) + " " + y);
            }
            x += moves;
        }
        //negative direction values
        else if (coordDirect[(turn) % coordDirect.length] === "S") {
            for (var j = 1; j < moves + 1; j++) {
                newCoords.push(x + " " + (y - j));
            }
            y -= moves;
        } else if (coordDirect[(turn) % coordDirect.length] === "W") {
            for (var j = 1; j < moves + 1; j++) {
                newCoords.push((x - j) + " " + y);
            }
            x -= moves;
        };
    };
    console.log(newCoords);
    var noRepeat = new Set(newCoords);
    var allRepeat = [];
    for (var i = 0; i < newCoords.length; i++) {
        if (noRepeat.has(newCoords[i])) {
            noRepeat.delete(newCoords[i]) //deletes any values that show up in the set
        }
        else {
            allRepeat.push(newCoords[i]) // therefore only pushes repeats
        };
    };
    console.log(allRepeat);
    var answer = allRepeat[0].split(" ");
    output.innerHTML = Math.abs(answer[0]) + Math.abs(answer[1]) + 1;
};