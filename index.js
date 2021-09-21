const menu = document.querySelector(".menu"),
	menuA = document.querySelectorAll(".menu > a"),
	insta = document.querySelector(".fa.fa-instagram"),
	fb = document.querySelector(".fb"),
	logo1 = document.querySelector(".logo1 img"),
	logo2 = document.querySelector(".logo2 img"),
	bar = document.querySelectorAll("button[aria-expanded]>div");
function scrollFunction() {
	90 < document.body.scrollTop || 90 < document.documentElement.scrollTop
		? ((logo1.style.transform = "translateX(-200%)"),
		  (logo1.style.transition = "all 0.8s"),
		  (logo2.style.transform = "translateX(-300%)"),
		  (logo2.style.trans1ition = "all 0.8s"),
		  menu.classList.add("scrolldown"),
		  insta.classList.add("scrolldown"),
		  fb.classList.add("scrolldown"),
		  menuA.forEach((o) => {
				o.style.color = "indigo";
		  }))
		: ((logo1.style.transform = "translateX(0)"),
		  (logo1.style.transition = "all 1.2s"),
		  (logo2.style.transform = "translateX(0)"),
		  (logo2.style.transition = "all 1.2s"),
		  menu.classList.remove("scrolldown"),
		  insta.classList.remove("scrolldown"),
		  fb.classList.remove("scrolldown"),
		  menuA.forEach((o) => {
				o.style.color = "white";
		  }));
}
function openFB() {
	window.open("https://www.facebook.com/IETUNMC");
}
function openInsta() {
	window.open("https://www.instagram.com/iet_unmc/");
}
function openMockTest() {
	window.open("https://www.hackerrank.com/testing-for-nott-a-thon-turing");
}
function googleform() {
	window.open("https://forms.gle/6WYx6ekwvbgkn7bV9");
	// alert("Registration is closed, sorry for inconvenience! Hope that we will see you next year!");
	//window.location.href='/result.html';

}
function openPrintcious() {
	window.open("https://www.printcious.com/my");
}
// function popOut() {
// 	alert("The result is not available yet. Stay tuned!!");
// }
1100 <= window.innerWidth &&
	(window.onscroll = function () {
		scrollFunction();
	}),
	window.innerWidth < 1100 &&
		(window.onscroll = function () {
			90 < document.body.scrollTop || 90 < document.documentElement.scrollTop
				? menu.classList.add("toggle")
				: menu.classList.remove("toggle");
		});
const dropdown = document.querySelectorAll(".ques"),
	ans = document.querySelectorAll(".answer");
function dropdownAns() {
	this.classList.toggle("active");
	var o = this.classList[1] - 1,
		t = this.classList[2];
	ans[o].style.maxHeight = "active" === t ? "200px" : "0";
}
dropdown.forEach((o) => {
	o.addEventListener("click", dropdownAns);
});
const navButton = document.querySelector("button[aria-expanded]"),
	stopScrollHTML = document.querySelector("html"),
	stopScrollBody = document.querySelector("body");
function toggleNav() {
	navButton.classList.toggle("cross-icon");
	var o = "true" === navButton.getAttribute("aria-expanded") || !1;
	navButton.setAttribute("aria-expanded", !o),
		0 == o
			? (menu.classList.add("toggle"),
			  menuA.forEach((o) => {
					o.style.display = "block";
			  }),
			  (stopScrollBody.style.overflow = "hidden"),
			  stopScrollHTML.style.overflow)
			: 1 == o &&
			  (menu.classList.remove("toggle"),
			  menuA.forEach((o) => {
					o.style.display = "none";
			  }),
			  (stopScrollBody.style.overflow = "scroll"),
			  stopScrollHTML.style.overflow);
}
navButton.addEventListener("click", toggleNav);

const intViewportHeight = window.innerHeight - 191;
const rulebook = document.querySelector("iframe");
if (intViewportHeight > 50) {
	rulebook.style.height = `${intViewportHeight}px`;
} else {
	rulebook.style.height = "500px";
}
