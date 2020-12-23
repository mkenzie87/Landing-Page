console.log("Test Link");

document.body.onload = newMenu;
// document.body.onload = newMenu2;
// TESTING

// select the all (sections) in the page
const mainHeading = document.querySelectorAll('section');

function newMenu() {
  for (const section of mainHeading) {
    // Create Elements
    const listItem = document.createElement('li'); // creat a new li
    const achor = document.createElement('a'); // creat a new href

    const mainNav = document.getElementById('nav-items') // add li to main ul

    //Getting Data
    const data = section.dataset.nav; // get the menu name
    const idName = section.id; // get section id value

    // Setting A Link and LI  Data
    listItem.setAttribute('class', 'nav-li'); // Giving Href Link Value
    achor.setAttribute('class', 'achor-links'); // Giving Href Link Value
    achor.textContent = data; // Giving Href Name Value
    achor.setAttribute('href', `#${idName}`); // Giving Href Link Value

    listItem.appendChild(achor); // appending href to li
    mainNav.appendChild(listItem); // appending li to ul
  }
}



// random id testing to add class
var random = document.getElementById("random");

random.addEventListener("click", function() {
  random.classList.toggle("random");
})
console.log(random);


document.querySelectorAll(".nav-li").forEach(box =>
    box.addEventListener("click", () => box.classList.toggle("active"))
);


// const cbox = document.querySelectorAll(".achor-links");
//
//  for (let i = 0; i < cbox.length; i++) {
//      cbox[i].addEventListener("click", function() {
//        cbox[i].classList.toggle("active");
//      });
//  }



// var className = document.getElementsByClassName("achor-links");
//
// var elements = document.getElementsByClassName("achor-links");
// console.log(className);
// for (i = 0; i < elements.length; ++i) {
//
//   elements[i].addEventListener('click', function() {
//     console.log(elements);
//     // Do something amazing
//
//   });
//
// }
