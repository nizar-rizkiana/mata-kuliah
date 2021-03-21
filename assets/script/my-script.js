// search-input btn-toggle - untuk responsive mobile

var tombol = document.getElementById('btn-toggle');
var form = document.querySelector('.form-search');
			
tombol.addEventListener('click', function(){
	inputShow();
});

function inputShow(){
	form.classList.toggle('show');
}
// --------------- end input toggle -----------------//

// script function dropdown aktif

const dropdown_btns = document.querySelectorAll(".dropdown-btn");
const burger = document.querySelector(".burger");
// script my-nav
burger.addEventListener("click", () => {
	const navbar_content = document.querySelector(".navbar-content");
	burger.classList.toggle("active");
	navbar_content.classList.toggle("show");
});
		
dropdown_btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const dropdown = e.currentTarget.nextElementSibling;
		dropdown.classList.toggle("show");
		document.querySelectorAll(".dropdown-btn + .dropdown-list").forEach((dropdown) => {
			if (dropdown !== e.currentTarget.nextElementSibling) {
				dropdown.classList.remove("show");
			}
		});
	});
});

window.onclick = (e) => {
	if (!e.target.matches(".dropdown-btn")) {
		const dropdowns = document.querySelectorAll(".dropdown-list");
		dropdowns.forEach((drpodown) => {
			drpodown.classList.remove("show");
		});
	}
}; 

//----------------- end script -------------------//

// script untuk navbar hide ketika di scroll
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// 	var currentScrollPos = window.pageYOffset;
// 	if (prevScrollpos > currentScrollPos) {
// 		document.getElementById("navbar").classList.add("show-shadow");
// 	} else {
// 		document.getElementById("navbar").classList.remove("show-shadow");
// 	}
// 	prevScrollpos = currentScrollPos;
// }


/* ----- script baru untuk memberikan efek shadow 
   			 pada navbar ketika scroll -------------*/

window.onscroll = function() {scFunction()};

function scFunction(){
	if (document.documentElement.scrollTop > 120) {
    document.getElementById("navbar").classList.add("show-shadow");
  }
  if (document.documentElement.scrollTop < 80) {
  	document.getElementById("navbar").classList.remove("show-shadow");
  }
  if (document.documentElement.scrollTop > 700){
		document.getElementById("btn-up").classList.add("show-up");
	}
	if (document.documentElement.scrollTop < 700){
		document.getElementById("btn-up").classList.remove("show-up");
	}
}
// function scFunction() {
//   if (document.documentElement.scrollTop > 120) {
//     document.getElementById("navbar").classList.add("show-shadow");
//   }else if (document.documentElement.scrollTop < 80) {
//   	document.getElementById("navbar").classList.remove("show-shadow");
//   }

// }
// baru --- script btn up
// window.onscroll = function() {upFunction()};

// function upFunction(){
// 	if (document.documentElement.scrollTop > 700){
// 		document.getElementById("btn-up").classList.add("show-up");
// 	}else if (document.documentElement.scrollTop < 700){
// 		document.getElementById("btn-up").classList.remove("show-up");
// 	}
// }