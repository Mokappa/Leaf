function navSlide() {
	const lines3NAV = document.querySelector(".lines3NAV");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");
	const NVlines = document.querySelectorAll(".NavLinks-Lines");

	lines3NAV.addEventListener("click", () => {
		//Toggle Nav
		nav.classList.toggle("navACTIVE");

		//Animate Links
		navLinks.forEach((link, index) => {
			if(link.style.animation) {
				link.style.animation = ""
			}
			else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});

		NVlines.forEach((link, index) => {
			if(link.style.animation) {
				link.style.animation = ""
			}
			else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});



		//lines3NAV Animation
		lines3NAV.classList.toggle("toggle");
	});
}

navSlide();