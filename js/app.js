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


  //This sections check if section is in the viewport and adds a class

  // function isInViewport(el) {
  //   const rect = el.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //
  //   );
  //
  // }

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



  // const box = document.querySelector('#cta-wrapper');
  // const message = document.querySelector('#message');

  // console.log(box.getBoundingClientRect());

  document.addEventListener('scroll', function(e) {

    for (const scroller of mainHeading) {
      const sectionID = scroller.id; // get section id value

      if (isInViewport(scroller)) {
        console.log(sectionID);
        scroller.classList.add("active-section");

        for (const navActive of addActive) { // Loops through A Link Classes
          e.target.classList.add("active"); // Removes the classes for all Links of Active
        }

      } else {
        // console.log('The box is not visible in the viewport');
        scroller.classList.remove("active-section");
      }
    }
    });



}
