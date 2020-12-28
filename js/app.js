console.log("Test Link"); // Testign file connecting

document.body.onload = newMenu;

// Global Vars
let mainHeading = document.querySelectorAll('section');
let ul = document.querySelector('ul'); // Selects the UL Elements in Nav
let addActive = document.querySelectorAll(".achor-links"); // Selects all A link Classes

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

  ul.addEventListener("click", function(e) { // start of event listner on click UL

    for (const active of addActive) { // Loops through A Link Classes

      active.classList.remove("active"); // Removes the classes for all Links of Active
    }
    e.target.classList.add("active"); // Targets the a link and add ths Active Class
  });


  // // This sections check if section is in the viewport and adds a class

  function isInViewport(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }

// Scrolling Event Listner to check menu and section data names and add Classes

  document.addEventListener('scroll', function() {
    let addActive = document.querySelectorAll(".achor-links"); // Selects all A link Classes
    for (const scroller of mainHeading) {
      const sectionData = scroller.dataset.nav; // get the menu name
      if (isInViewport(scroller)) {
        scroller.classList.add("active-section");
        // console.log(sectionID);
        for (const active of addActive) { // Loops through A Link Classes
          let aHref = active.innerHTML;
          // console.log(aHref)// const aHref = active.href;
          // console.log (sectionData + " Scroller")
          if (sectionData == aHref) {
            active.classList.add("active");
            console.log("WORKING");
          } else {
            active.classList.remove("active");
          }
        }
      } else {
        // console.log('The box is not visible in the viewport');
        scroller.classList.remove("active-section");
      }
    }
  });




}
