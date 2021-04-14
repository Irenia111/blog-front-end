//$('.ui.sticky').sticky();
$('.menu-toggle').click(() => {
  $('.nav-item').toggleClass('m-mobile-hide');
});
$('.ui.sidebar').sidebar('attach events', '#toc');
/*$(".toc.item").click(function () {
  $(".ui.sidebar")
    .sidebar('setting', 'transition', 'uncover')
    .sidebar("toggle");
});

 */
