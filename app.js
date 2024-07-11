var typed = new Typed('.typing-text', {
    strings: ["Front-end developer"],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
    
  });


  let menu = document.querySelector("#menu");
let clos = document.querySelector("#close");

let listItems = document.querySelectorAll(".responsive-bar ul li");
console.log(listItems)
console.log(menu);

let responsive = document.querySelector(".responsive-bar");
 
console.log(responsive)
menu.addEventListener("click", function () {
  responsive.style.right = "0%";
  menu.style.display = "none";
  clos.style.display = "initial";

  
});

clos.addEventListener("click",closeToggle );
listItems.forEach((listItem)=>{
  listItem.addEventListener("click", closeToggle)
})
function closeToggle () {
  console.log("tmkc")
  responsive.style.right = "-100%";
  menu.style.display = "initial";
  clos.style.display = "none";
}
  