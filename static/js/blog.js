if ($(window).width() > 768) {
  //只在宽屏时触发
  $('.ui.sticky').sticky();
}

$('.wechat-pop-up-button')
  .popup({
    popup: $('.wechat-pop-up.popup'),
    on: 'click',
    position   : 'top center',
  });

// 目录
tocbot.init({
  // Where to render the table of contents.
  tocSelector: '.tocbot',
  // Where to grab the headings to build the table of contents.
  contentSelector: '.typo-selection',
  // Which headings to grab inside of the contentSelector element.
  headingSelector: 'h1, h2, h3',
  hasInnerContainers: true,
});
