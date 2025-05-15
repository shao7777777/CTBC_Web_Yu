document.addEventListener("DOMContentLoaded", function () {
    //
    //手機板選單展開與收合
    //
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


    //
    // 回到最上方
    //
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

    //
    // 分頁-產品一覽 按鈕切換菜單
    //
    const buttons = document.querySelectorAll(".menu-buttons button");
    const groups = document.querySelectorAll(".menu-group");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Toggle active button
            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            // Show corresponding menu group
            const category = button.getAttribute("data-category");
            groups.forEach((group) => {
                if (group.classList.contains(category)) {
                    group.classList.add("active");
                } else {
                    group.classList.remove("active");
                }
            });
        });
    });
});