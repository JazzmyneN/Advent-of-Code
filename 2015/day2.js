function day2a(){
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    //variables
    var presents = [];
    var dimensions = [];
    var l = 0;
    var w = 0;
    var h = 0;
    surfaceArea = 0;

    var dimensions = input.split(" ");
    
    for(i = 0; i < dimensions.length; i++){
        var wrappingIndividual = dimensions[i].split("x");
    
        l = wrappingIndividual[0];
        w = wrappingIndividual[1];
        h = wrappingIndividual[2];
        
        surfaceArea += (2*l*w + 2*w*h + 2*h*l) + (Math.min(l*w, w*h, h*l));
    }
    output.innerHTML = surfaceArea;
}
function day2b(){
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    //variables
    var dimensions = [];
    var l = 0;
    var w = 0;
    var h = 0;
    ribbonFeet = 0;

    var dimensions = input.split(" ");
    
    for(i = 0; i < dimensions.length; i++){
        var wrappingIndividual = dimensions[i].split("x");
       
        l = wrappingIndividual[0];
        w = wrappingIndividual[1];
        h = wrappingIndividual[2];
        var a = 2*l+(2*w);
        var b = 2*h+(2*w);
        var c = 2*h+(2*l);
        
        var ribbon = Math.min(a,b,c);
        var area = l*w*h;

        ribbonFeet += ribbon + area;
    }
    output.innerHTML = ribbonFeet;
}