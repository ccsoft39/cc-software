const elements = document.querySelectorAll("fade-up");

const showOnScroll = () => {
	const triggerBottom = window.innerHeight * 0.85;

	elements.forEach(el => {
		const elementTop = el.getBoundingClientRect().top;

		if (elementTop < triggerBottom) {
			el.classList.add("show");
		}
	});
};

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);