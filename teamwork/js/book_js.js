

// banner swiper
var swiper = new Swiper('.swiper-container', {
	// spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	
});



var title = document.querySelector('.title')
var parallax_text = document.querySelector('.parallax-text')
var sectionhight = document.querySelector("#section_2")
window.onscroll = function () {
	console.log(window.scrollY);
	
	
	if (window.scrollY >= 4600) {
		lax.removeElement(title)
		lax.removeElement(parallax_text)
		sectionhight.style.height = "3000px";
	}
}


window.onload = function () {
	lax.setup() // init
	console.log(window.scrollY);
	
	
	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}
	
	window.requestAnimationFrame(updateLax)
}
// Aos 初始化
AOS.init();


// store區塊左邊放圖片的swiper
var swiper1 = new Swiper('#swiper1', {
	spaceBetween: 0,
	centeredSlides: true,
	
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	on: {
		slideChange: function () {
			var elm = document.querySelector('.m_home_hero_pager_bar_in');
			var newone = elm.cloneNode(true);
			elm.parentNode.replaceChild(newone, elm);
			// console.log("test");
			
		}
	}
});
// store區塊右邊放分店資訊的swiper
var swiper2 = new Swiper('#swiper2', {
	spaceBetween: 0,
	centeredSlides: true,
	
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

// 把左右兩邊的swiper綁定一起能同步切換
swiper1.controller.control = swiper2;
swiper2.controller.control = swiper1;