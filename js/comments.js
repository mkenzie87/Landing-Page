


// let last_known_scroll_position = 0;
// let ticking = false;
//
// function doSomething(scroll_pos) {
//   // Do something with the scroll position
//   console.log('test')
//   for (const section of mainHeading) {
//     section.getBoundingClientRect();
//   }
// }
//
// document.addEventListener('scroll', function(e) {
//   last_known_scroll_position = window.scrollY;
//
//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });
//
//     ticking = true;
//   }
// });





//use window.scrollY
// var scrollpos = window.scrollY;
//
// function add_class_on_scroll() {
//
//   for (const active of addActive) { // Loops through A Link Classes
//     active.classList.add("active"); // Removes the classes for all Links of Active
//   }
// }
//
// function remove_class_on_scroll() {
//   for (const active of addActive) { // Loops through A Link Classes
//     active.classList.remove("active"); // Removes the classes for all Links of Active
//   }
// }
//
// window.addEventListener('scroll', function(){
//     //Here you forgot to update the value
//     scrollpos = window.scrollY;
//
//     let sectionPosition = document.querySelectorAll('section');
//
//       for (const position of sectionPosition) {
//       //   let itemPos = position.getBoundingClientRect();
//       //   console.log(itemPos);
//       //
//       //   if(scrollpos == position.top){
//       //       add_class_on_scroll();
//       //   }
//       //   else {
//       //       remove_class_on_scroll();
//       //   }
//     }
//
//     //console.log(scrollpos);
// });



// document.querySelectorAll("li a.achor-links").forEach(random =>
//     random.addEventListener("click", () => random.classList.toggle("active"))
// );


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
