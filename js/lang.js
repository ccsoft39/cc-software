const translation = {
	tr: {



		home: "Ana Sayfa",
		about: "Hakkımızda",
		services: "Hizmetler",
		contact: "İletişim",
		heroTitle: "Geleceği Kodluyoruz",
		heroText: "Profesyonel yazılım çözümleri ile işinizi dijitale taşıyın, yada taşıyalım...",

		servicesTitle: "Hizmetlerimiz",
		service1: "Web Sitesi Geliştirme",
		service2: "Mobil Uygulama",
		service3: "Özel Yazılım",
		service4: "Sistem & Sunucu",

		contactTitle: "İletişim",
		send: "Gönder",
		name: "Ad Soyad",
		email: "E-posta",
		message: "Mesajınız"

	},
	en: {
		home: "Home",
		about: "About Us",
		services: "Services",
		contact: "Contact",
		heroTitle: "We Code the Future",
		heroText: "Professional software soluyions to grow your bussines.",

		servicesTitle: "Our Services",
		service1: "Web Development",
		service2: "Mobile Applications",
		service3: "Custom Software",
		service4: "System & Server",

		contactTitle: "Contact",
		send: "Send",
		name: "Full Name",
		email: "E-mail",
		message: "Your Message"
	}
};

function setLanguage(lang) {
	document.querySelectorAll("[data-key]").forEach(el=> {
		el.innerText = translation[lang][el.getAttribute("data-key")];
	});

	document.querySelectorAll("[data-key placeholder]").forEach(el => {
		el.placeholder = translation[lang][el.getAttribute("data-key-placeholder")];
	});
}