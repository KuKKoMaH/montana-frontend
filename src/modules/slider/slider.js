import 'slick-carousel';
import 'photoswipe';
import initGallery from '../../js/initGallery';

$('.' + slider_wrapper).each(function() {
  const $this = $(this);
  initGallery({
    $items: $this.find('.' + slider_slide)
  });

  $this.find('.' + slider_block).slick({
    lazyLoad:       'progressive',
    dots:           false,
    slidesToShow:   2,
    slidesToScroll: 2,
    // variableWidth:  true
  });
});
