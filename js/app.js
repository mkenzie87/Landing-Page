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


  //This sections check if section is in the viewport and adds a class

  function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)

      );


  }


  const box = document.querySelector('#in-viewport');
  const message = document.querySelector('#message');

  document.addEventListener('scroll', function () {
      const messageText = isInViewport(box) ?
          'The box is visible in the viewport' :
          'The box is not visible in the viewport';

      console.log(messageText);

  }, {
      passive: true
  });



























  // var isOutOfViewport = function (elem) {
  //
  //   // Get element's bounding
  //   var bounding = elem.getBoundingClientRect();
  //
  //   // Check if it's out of the viewport on each side
  //   var out = {};
  //   out.top = bounding.top < 0;
  //   out.left = bounding.left < 0;
  //   out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
  //   out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
  //   out.any = out.top || out.left || out.bottom || out.right;
  //
  //   return out;
  //
  // };
  //
  // var elem = document.querySelector('section#about-wrapper');
  //
  // var logViewport = function () {
  //   var isOut = isOutOfViewport(elem);
  //   if (isOut.any) {
  //     console.log('Not in the viewport! =(');
  //     ul.classList.remove("test");
  //   } else {
  //     console.log('In the viewport! =)');
  //     ul.classList.add("test");
  //   }
  // };
  //
  // logViewport();
  // window.addEventListener('scroll', logViewport, false);
  //































































//
// let sectionPosition = document.querySelectorAll('section');
//
//
//
//
// function add_class_on_scroll() {
//
//   for (const active of addActive) { // Loops through A Link Classes
//     active.classList.add("active"); // Removes the classes for all Links of Active
//   }
// }
//
// function add_class_on_scroll2() {
//     let testerEl = document.getElementById("nav-items");
//     testerEl.classList.add("active"); // Removes the classes for all Links of Active
//
// }
//
// function remove_class_on_scroll() {
//   for (const active of addActive) { // Loops through A Link Classes
//     active.classList.remove("active"); // Removes the classes for all Links of Active
//   }
// }
//
// let tester = document.querySelector("#cta-wrapper");
//
//
// const sections = document.querySelectorAll("section");
//
// window.onscroll = function() {
//   // Don't run the rest of the code if every section is already visible
//   if (!document.querySelectorAll('section.fly-in:not(.visible)')) return;
//
//   // Run this code for every section in sections
//   for (const section of sections) {
//     // if (section.getBoundingClientRect().top <= window.innerHeight * 0.75 && section.getBoundingClientRect().top > 0) {
//     //   section.classList.add('visible');
//     // }
//
//     if(isInViewport(section)){
//       console.log('visible');
//     } else {
//       console.log('not visible');
//     }
//
//   }
// };
//
//
// function isInViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }


























// function isInViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//
//   );
// }
// console.log(tester.getBoundingClientRect());
// console.log(tester.getBoundingClientRect().top);
//   document.addEventListener('scroll', function () {
//       const messageText = isInViewport(tester) ?
//           'The box is visible in the viewport' :
//           'The box is not visible in the viewport';
//
//       console.log(messageText)
//
//   });


  // document.addEventListener('scroll', function () {

    // for (const position of sectionPosition) {
    //   let itemPos = (position.getBoundingClientRect());

  //     if(isInViewport(tester)) {
  //       console.log("true")
  //     } else {
  //       remove_class_on_scroll()
  //     }
  //     //console.log(itemPos);
  //   // }
  //
  // });

}
