import 'jquery';

const content = $('.' + sidebars_content);

$('.' + sidebars_open).on('click', function() {
  content.addClass(sidebars_active);
})

$('.' + sidebars_close).on('click', function() {
  content.removeClass(sidebars_active);
})