$(function() {
    console.log('asd');
    showSubMenu();
})
window.onscroll = function(event) {
    scrollToggleHeader(event);
}

// 滚动出发收起header
function scrollToggleHeader(_event) {
    var scrollVal = $(document).scrollTop();
    if (scrollVal > 0) {
        console.log('down')
        $('.header-wrapper').addClass('header-small');
    } else {
        console.log('top')
        $('.header-wrapper').removeClass('header-small');
    }
}

// 悬浮nav时显示submenu
function showSubMenu() {
    $('.menu-item').mouseenter(function() {
        $(this).children('.sub-menu').show();
    })
    $('.menu-item').mouseleave(function() {
        $(this).children('.sub-menu').hide();
    })
}