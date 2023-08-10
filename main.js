let togglebutton = document.querySelector(".toggle");
let linkDiv = document.querySelector(".link-container");
let linkLength = linkDiv.querySelector(".links");

let dateupdate = document.querySelector(".year");
let navbar = document.querySelector(".nav");
let backtop = document.querySelector(".back-top");
let linkscroll = document.querySelectorAll(".scrollLink");

//*** date update ****//
let update = new Date().getFullYear();
console.log(update)
dateupdate.innerHTML = update;



//**** toggle button ****//

togglebutton.addEventListener("click", function() {
//  linkDiv.classList.toggle("show-links")
let container = linkDiv.getBoundingClientRect().height;
let links = linkLength.getBoundingClientRect().height
console.log(`${links}`)
if (links > container) {
  linkDiv.style.height = `${links}px`;
} else {
  linkDiv.style.height = 0;
}
})


//**** window scroll ****//
 window.addEventListener("scroll", function() {
  let navheight = navbar.getBoundingClientRect().height;
  let check = window.pageYOffset;
  if (navheight < check) {
    navbar.classList.add("fixed-nav")
  } else {
    navbar.classList.remove("fixed-nav")
  }
  
  let scroll = window.pageYOffset;
  if (scroll > 200) {
    backtop.classList.add("show-backtop")
  } else {
    backtop.classList.remove("show-backtop")
  }
 })



linkscroll.forEach((btns) => {
btns.addEventListener("click", function(e) {
  e.preventDefault();
let id = e.currentTarget.getAttribute("href").slice(1);
let linksc = document.getElementById(id);
let nav = navbar.getBoundingClientRect().height;
let linkcontainer = linkDiv.getBoundingClientRect().height;
let fixednav = navbar.classList.contains("fixed-nav");
console.log(fixednav);
//console.log(linkcontainer)
let position = linksc.offsetTop - nav;
console.log(position);

if (!fixednav) {
  position = position;
  
 }

if (nav > 200) {
 position = position + linkcontainer;
}
window.scrollTo({
  left: 0,
  top: position
})
linkDiv.style.height = 0;
})
})
