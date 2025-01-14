//section01 - 메인배너 스와이퍼
const mb = new Swiper('.mb', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 3000,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },
});
const pagingSwiper1 = new Swiper('.mb', {
  loop: true,
  pagination: {
    el: ".swiper-pagination-progressbar",
    type: "progressbar",
    clickable: true,
  },
});
const pagingSwiper2 = new Swiper('.mb', {
  loop: true,
  pagination: {
    el: ".swiper-pagination-bullets",
    type: "bullets",
    clickable: true,
  },
});
mb.controller.control = pagingSwiper1;
pagingSwiper1.controller.control = pagingSwiper2;




//메인배너 play, pause 버튼
$(".btn_play").hide();
$(".btn_pause").click(function () {
  mb.autoplay.stop();
  $(this).hide();
  $(".btn_play").show();
});
$(".btn_play").click(function () {
  mb.autoplay.start();
  $(this).hide();
  $(".btn_pause").show();
});

//Depth2
$(".gnb>li").mouseenter(function () {
  $(this).find(".depth2 ").stop().fadeIn(500);
});
$(".gnb>li").mouseleave(function () {
  $(this).find(".depth2 ").stop().fadeOut(0);
});




// section02- 포스터 스와이퍼
const po_list = new Swiper('.po_list', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 2000,
  breakpoints: {
    768: {
      slidesPerView: 4,
      centeredSlides: false,
    },
    1500: {
      slidesPerView: 3.2,
      centeredSlides: false,
    },
  },

});

//section04. schedule
$(".scrollbox > li:not(:first-child)").hide();
$(".list_tit li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  let idx = $(this).index();
  $(".scrollbox  > li").eq(idx).fadeIn(500).siblings().fadeOut(0);
});




//section07. promotion
const video = new Swiper('.video', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 5000,
  spaceBetween: 10,
  slidesPerView: 2,
  centeredSlides: true,


  breakpoints: {
    768: { slidesPerView: 3, }
  },
  breakpoints: {
    1200: { slidesPerView: 4, }
  },

});
 
//모바일메뉴

$(".mdepth2 > ul:not(:first-child)").hide();
$(".mgnb > li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  let idx = $(this).index();
  $(".mdepth2 > ul").eq(idx).fadeIn(500).siblings().fadeOut(0);
});

$(".mgnb_wrap").hide();
$(".mgnb_dimmed").hide();
$(".ham").click(function () {
  $(".mgnb_wrap").fadeIn();
  $(".mgnb_dimmed").fadeIn();
});


$(".mgnb_close").click(function () {
  $(".mgnb_wrap").fadeOut();
  $(".mgnb_dimmed").fadeOut();
});

//사이트맵
$(".site_map").click(function () {
  $("#map").fadeIn();
});
$(".map_close").click(function () {
  $("#map").fadeOut();
});

//검색
$(".search").hide();
$(".btn_sch").click(function () {
  $(this).toggleClass("on");
  $(".search").fadeToggle();
});