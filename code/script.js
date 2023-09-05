document.addEventListener('scroll', () =>{
  const header = document.querySelector('header');
  if (window.scrollY > 50){
    header.classList.add('scrolled');
  }
  else {
    header.classList.remove('scrolled');
  }
})

document.addEventListener("DOMContentLoaded", function () {
  var contactButton = document.querySelector(".contactb");

  var fifthPage = document.querySelector(".fifth-page");

  contactButton.addEventListener("click", function () {
      
      fifthPage.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var contactButton = document.querySelector(".arrowbutton");

  var secondPage = document.querySelector(".secondpage");

  contactButton.addEventListener("click", function () {
      
      secondPage.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var contactButton = document.querySelector(".hobbiesbutton");
 
  var thirdPage = document.querySelector(".thirdpage");

  contactButton.addEventListener("click", function () {
      
      thirdPage.scrollIntoView({ behavior: "smooth" });
  });
});