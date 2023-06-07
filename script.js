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



// for (var i = 0; i < items.length; i++){
//     items[i].addEventListener("click", editItem);
// }

// function editItem() {
//     console.log(this);
// }


//Add a title attribute to every element that has the important class
// const importantElements = document.querySelectorAll('.important');
var elements = document.getElementsByClassName('important');

// Loop through each element and add the title attribute
for (var i = 0; i < elements.length; i++) {
  elements[i].setAttribute('title', 'This element is important');
}


// Select all the img tags and loop through them. If they have no important class
const imgs = document.querySelectorAll('img');
for (const img of imgs) {

  if (!img.classList.contains('important')) {
    img.style.display = 'none';
  }
}

//Loop through all the paragraphs and display their content in the console
const paragraphs = document.querySelectorAll('p');

for (const paragraph of paragraphs) {
  const content = paragraph.textContent;

  if (paragraph.classList.contains('important')) {
    console.log(`${content} (${paragraph.classList.join(' ')})`);
  } else {
    console.log(content);
  }
}




//Give each of the paragraph a random text color
const paragraphs2 = document.querySelectorAll('p');
for (const paragraph of paragraphs2) {
  if (!paragraph.classList.contains('important')) {
    paragraph.style.color = getRandomColor();
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

