document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".hamburger-menu");   // 選擇漢堡按鈕
    const mobileMenu = document.querySelector(".mobile-menu-toggle");   // 選擇選單容器

    menuToggle.addEventListener("click", function (event) {
        event.preventDefault();
        mobileMenu.classList.toggle("active");  // 切換 active 來展開/收合
    });

    // 點擊外部時關閉選單
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileMenu.classList.remove("active");
        }
    });
});

// Initialize Swiper
var swiper = new Swiper(".Swiper-banner", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // 顯示進度圈圈
        // type: "progressbar", // 顯示進度條
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true, // 輪播結束後回到第一張繼續輪播
    grabCursor: true // 手手
});

var swiper = new Swiper(".Swiper-feature", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: { // 響應式
        640: {
            slidesPerView: 3,
            // spaceBetween: 20,
        },
    },
});