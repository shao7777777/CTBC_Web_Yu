$(document).ready(function() {
	$('#menu_btn').on('click', function() {
		// 檢查是否有 'active' 類別
		if ($(this).hasClass('active')) {
			// 移除 'active' 類別 並 更改 SVG 為原始狀態
			$(this).removeClass('active').html('<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z"/></svg>');
			$('nav').removeClass('open');
		} else {
			// 添加 'active' 類別 更改 SVG 為新狀態
			$(this).addClass('active').html('<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m8 8.707 3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708z"/></svg>');
			$('nav').addClass('open');
		}
	});

	// 點擊選單連結後自動收合選單
	$('nav ul li a').on('click', function() {
		$('nav').removeClass('open');
		$('#menu_btn').removeClass('active');
	});
});