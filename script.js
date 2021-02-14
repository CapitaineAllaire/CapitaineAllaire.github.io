var css = document.querySelector("h3");
var color = document.querySelectorAll("input");
var body = document.getElementById("gradient");
var add = document.getElementById("add");
var div = document.getElementById("color_inputs");
var add_button = document.getElementById("add");
var remove_button = document.getElementById("remove");
var rotate_button = document.getElementById("rotate");

var angles = ["to right", "to bottom right", "to bottom", "to bottom left", "to left", "to top left", "to top", "to top right"]
count = 0

var css_code = "linear-gradient("+ angles[count] +", " + color[0].value + ", " + color[1].value + ")";
	

function addColor() {
	var color = document.querySelectorAll("input");
	var color_input = document.createElement("input");
	color_input.class="color";
	color_input.type="color";
	color_input.name="color"+color.length;
	color_input.value='#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
    div.appendChild(color_input);
    color_input.addEventListener("input", function() { update_both(angles[count % 8]); } )
    addColorListener()
}




function removeColor() {
    let inputs = document.getElementById('color_inputs');
    if (inputs.children.length > 2) { 
    	/* inputs.lastElementChild.removeEventListener("input") à vérifier  */
        inputs.removeChild(inputs.lastElementChild);
         }
    
}


function update_background(angle) {
	var color = document.querySelectorAll("input");
	var css_code = "linear-gradient("+ angle  +", " + color[0].value ;
	for (i = 1; i < color.length; ++i) {
        css_code = css_code + ", " + color[i].value; }
	css_code =css_code + ") no-repeat center center fixed";
    body.style.background = css_code ;

    return "background : " + css_code + ";"
}


function update_h3_tag(css_code) {
    css.innerText = css_code;
}


function update_both(angle) {
    update_h3_tag(update_background(angle));
    console.log(angle)
}


function addColorListener() {
	for (i = 0; i < color.length; ++i) {
        color[i].addEventListener("input", function() { update_both(angles[count % 8]); } ) }
}


function initialise() {
    add_button.addEventListener("click", function() { addColor(); update_both(angles[count % 8]) } );
    remove_button.addEventListener("click", function() { removeColor(); update_both(angles[count % 8]) } );
    rotate_button.addEventListener("click", function() { count++; update_both(angles[count % 8]) } );
    

}

initialise();
addColorListener();
update_both(angles[count % 8]);