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


document.querySelectorAll("li a.achor-links").forEach(random =>
    random.addEventListener("click", () => random.classList.toggle("active"))
);


// function scrollToTargetAdjusted() {
//      var element = document.getElementById('targetElement');
//      var headerOffset = 45;
//      var elementPosition = element.getBoundingClientRect().top;
//      var offsetPosition = elementPosition - headerOffset;
//
//      window.scrollTo({
//          top: offsetPosition,
//          behavior: "smooth"
//      });
//  }


// Remember to include the smooth scroll polyfill:
// (https://github.com/iamdustan/smoothscroll)


// // To Section
// const navLinks = document.querySelectorAll(
//   'nav a'
// );
//
// Array.from(navLinks).forEach(navLink => {
//   const href = navLink.getAttribute('href');
//   const section = document.querySelector(href);
//   const offset = 50 + 20; // nav and offset
//
//   navLink.onclick = e => {
//     // get body position
//     const bodyRect = document.body.getBoundingClientRect().top;
//     // get section position relative
//     const sectionRect = section.getBoundingClientRect().top;
//     // subtract the section from body
//     const sectionPosition = sectionRect - bodyRect;
//     // subtract offset
//     const offsetPosition = sectionPosition - offset;
//
//     e.preventDefault();
//     window.scrollTo({
//       top: offsetPosition,
//       behavior: 'smooth'
//     });
//   }
// })



// // To Top
// document.querySelector('#top').onclick = e => {
//   e.preventDefault();
//   window.scrollTo({top: 0, behavior: 'smooth'});
// }
//




//
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
