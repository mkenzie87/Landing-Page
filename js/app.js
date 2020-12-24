console.log("Test Link"); // Testign file connecting

document.body.onload = newMenu;

// select the all (sections) in the page
let mainHeading = document.querySelectorAll('section');

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

  // This section add event listner on click for Navigation

  let ul = document.querySelector('ul'); // Selects the UL Elements in Nav
  let addActive = document.querySelectorAll(".achor-links");  // Selects all A link Classes

  ul.addEventListener("click", function(e) { // start of event listner on click UL

    for (const active of addActive) { // Loops through A Link Classes

      active.classList.remove("active"); // Removes the classes for all Links of Active
    }
      e.target.classList.add("active"); // Targets the a link and add ths Active Class
  });







let sectionPosition = document.querySelectorAll('section');


function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
}

function add_class_on_scroll() {

  for (const active of addActive) { // Loops through A Link Classes
    active.classList.add("active"); // Removes the classes for all Links of Active
  }
}

function add_class_on_scroll2() {
    let testerEl = document.getElementById("nav-items");
    testerEl.classList.add("active"); // Removes the classes for all Links of Active

}

function remove_class_on_scroll() {
  for (const active of addActive) { // Loops through A Link Classes
    active.classList.remove("active"); // Removes the classes for all Links of Active
  }
}

let tester = document.getElementById("cta-wrapper");
let testerEl = document.getElementById("nav-items");


document.addEventListener('scroll', function () {

  // for (const position of sectionPosition) {
  //   let itemPos = (position.getBoundingClientRect());

    if(isInViewport(tester)) {
      console.log("true")
    } else {
      remove_class_on_scroll()
    }
    //console.log(itemPos);
  // }

});


  //
  //
  // const box = document.querySelector('.box');
  // const message = document.querySelector('#message');
  //
  // document.addEventListener('scroll', function () {
  //     const messageText = isInViewport(box) ?
  //         'The box is visible in the viewport' :
  //         'The box is not visible in the viewport';
  //
  //     message.textContent = messageText;
  //
  // }, {
  //     passive: true
  // });





}







// random id testing to add class
var random = document.getElementById("random");

random.addEventListener("click", function() {
  random.classList.toggle("random");
})
console.log(random);
