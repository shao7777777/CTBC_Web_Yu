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

    // 回到最上方
    const topButton = document.getElementById('backToTop');
    // 顯示/隱藏按鈕(淡入淡出)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            topButton.classList.add('show');
        } else {
            topButton.classList.remove('show');
        }
    });
    // 點擊後平滑滾動至最上方
    topButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});