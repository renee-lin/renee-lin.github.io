$('.waters').ripples({
	
	resolution: 512,
	dropRadius: 20, //px
	perturbance: 0.04,
	
});

setInterval(function () {
	var $el = $('.waters');
	var x = Math.random() * $el.outerWidth();
	var y = Math.random() * $el.outerHeight();
	var dropRadius = 20;
	var strength = 0.08 + Math.random() * 0.08;
	$el.ripples('drop', x, y, dropRadius, strength);
}, 400);
;

$(".logo img").fadeIn(10000);

function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}


sleep(8000).then(() => {
	//
	// $('.background').fadeOut(2000)
	// $('.index').show(4000);
	
	
	// 这里写sleep之后需要去做的事情
})

$(function () {
	//例子1
	$('.text_bar').lu_word();
});

products_list = $('.about .product_list');
console.log(products_list);


// swiper js
// var swiper = new Swiper('.swiper-container', {
// 	cssMode: true,
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	pagination: {
// 		el: '.swiper-pagination'
// 	},
// 	mousewheel: true,
// 	keyboard: true,
// });
// console.log($('.swiper-slide'))
// lax js 初始化

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

var title = document.querySelector('.title')
var parallax_text = document.querySelector('.parallax-text')
var sectionhight = document.querySelector("#section_2")
window.onscroll = function () {
	console.log(window.scrollY);
	
	
	if (window.scrollY >= 4600) {
		lax.removeElement(title)
		lax.removeElement(parallax_text)
		sectionhight.style.height = "100vh";
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
