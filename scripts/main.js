const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|\:;"<,>.?/';

var slider = document.getElementById("passSlider");
var label = document.getElementById("label");
var out = document.getElementById("output");

document.getElementById("genButton").addEventListener("click", genPassword);

label.innerText = "Length:" + slider.value;

slider.oninput = function() {
    label.innerText = "Length:" + slider.value;
};

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function genPassword(){
    out.innerText = generateString(slider.value);
    navigator.clipboard.writeText(out.innerText);
}