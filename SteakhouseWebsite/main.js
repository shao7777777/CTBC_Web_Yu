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