function day4a() {
    var input, output  = document.getElementById("input").value;
    var output = document.getElementById("output");
    var fiveZeroCheck = false;
    while(fiveZeroCheck === false) {
        var newHash = input + i;
        if (md5(newHash).startsWith("00000") ){
            output.innerHTML = i;
            fiveZeroCheck = true;
        };
        i++;
    };
};
function day4b() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var sixZeroCheck = false;
    var i = 0;
    while(sixZeroCheck === false) {
        var newHash = input + i;
        if (md5(newHash).startsWith("000000") ){
            output.innerHTML = i;
            sixZeroCheck = true;
        };
        i++;
        
    };
};