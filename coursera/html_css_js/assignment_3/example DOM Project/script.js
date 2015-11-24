function show_box() {
    
var width = 500;
var height = 500;
var top_position = 25;
var left_position = 25;
var colors = ["red","blue","indigo","orange","yellow","green","purple"];
var target = document.getElementById("_body");

    while (width > 30){

        var index = Math.floor(Math.random() * 7);

        var new_node = document.createElement("div");

        new_node.style.width = width+"px";
        new_node.style.height = height+"px";
        new_node.style.left = left_position+"px";
        new_node.style.top = top_position+"px";
        new_node.style.background = colors[index];

        target.appendChild(new_node);

        width -= 20;
        height -= 20;
        top_position += 10;
        left_position += 10;    

    }
}