/*
*/
javascript:alert(document. title.innerHTML = "Modifying the DOM");
// document.body.style.backgroundColor = "#FF69B4";
// document.body.style.backgroundColor = "rgb(200,200,200)";
document.querySelectorAll('body,body *');

var click = document.body;

click.addEventListener("mouseenter", function(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";



    let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.body.style.background = bgColor;

});

var children = document.body.children;
for (c of children) { 
  console.log(c);
}

// var h1Element = document.querySelector('.content');

// // h1Element.classList.add('important');

// h1Element.setAttribute('title', 'This is an important item');


// const boldAnchor = document.querySelector('a#bold')
// console.log(boldAnchor.innerText) // "another link"


var content = document.getElementById("content");
var items = content.querySelectorAll("li");

for (var i = 0; i < items.length; i++){
    items[i].addEventListener("click", editItem);
}

function editItem() {
    console.log(this);
}