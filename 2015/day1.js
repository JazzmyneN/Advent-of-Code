function day1a() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var array = [];
    var answer = 0;

    // every character, in the input. seperate into 
    // array values

    for(var i = 0; i < input.length; i++ ){
        array.push(input.charAt(i));
    }
    for(var i = 0; i < array.length; i++){
        if(array[i] === "("){
            answer++;
            
        }
        else {
            answer--;
            
        }
    }
    output.innerHTML = answer;
}
function day1b() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var array = [];
    var answer = 0;
    var floor = 0;

    for(var i = 0; i < input.length; i++ ){
        array.push(input.charAt(i));
    }
    for(var i = 0; i < array.length; i++){
        if(array[i] === "("){
            answer++;
            if(answer === -1) {
                output.innerHTML = i+1;
                break;
            }
        }
        else {
            answer--;
            if(answer === -1) {
                output.innerHTML = i+1;
                break;
            }
        } 
    }
}
