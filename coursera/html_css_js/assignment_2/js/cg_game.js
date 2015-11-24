var finished = false;
var guessess = 0;
var target_index;
var target_color;
var w3colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"]; /* 147 colors */
var colors = [];
var col_num;
var i=0;

function run_game(){
    alert(w3colors.length);
	do {
        col_num = prompt("how many color would you like to generate?");
        var col_num_int = parseInt(col_num);
	    if (isNaN(col_num_int)){alert("It's not a number!");}
	} while (isNaN(col_num_int))
    generate(col_num_int);
    
    /* main core of the game */
    while(!finished){
        var usr_choice = prompt("I am thinking about one of these colors: \n\n" + colors + "\n\n Which one I chose?\n");
        guessess += 1;
        finished = check();
    }
    /* setting background */
    myBody=document.getElementsByTagName("body")[0];
    myBody.style.background= target_color;
    
    /* checking user answer */
    function check(){
        if(colors.indexOf(usr_choice) === -1 ){
            alert("Ups! I don't recognize your color\nTry again");
            return false;
        }
        if (usr_choice < target_color){
            alert("Wrong! \n My color is alphabeticaly higher.. \n Try again!");
            return false;
        }   
        if (usr_choice > target_color){
            alert("Wrong! \n My color is alphabeticaly lower.. \nTry again!");
            return false;
        }
        else {
            alert("Right! You have guessed the color! It took you " + guessess + " guessess"); 
            colors = [];
            return true;          
        }
    }
    /* generating array with colors */
    function generate(col_num_int){
        while (i < col_num_int){
            target_index = Math.floor(Math.random() * w3colors.length);
            target_color = w3colors[target_index];
            colors.push(target_color);
            i++;      
        }
        colors.sort();
        alert("You have chosen " + col_num_int + " colors, which are:\n\n" + colors + "\n");
    }
}