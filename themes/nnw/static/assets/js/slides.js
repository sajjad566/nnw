$(document).ready(function() {

  // console.log('whichSlide: ' + whichSlide);

  $('.glide__bullet, .glide__slide, .glide__arrow').on('click', function(index) {

    var whichSlide;

    var activeSlide = $(this).attr('data-slide');
    if (activeSlide > 0) {
      whichSlide = ($(this).index() + 1);

    } else {
      whichSlide = $(".glide__slide").index($(".active"));
      if ($(this).hasClass('glide__arrow--next')) {
        whichSlide = (whichSlide + 2);
        if (whichSlide > $(".glide__slide").length) {
          whichSlide = 1;
        }

      }
      if (whichSlide <= 0) {
        whichSlide = $(".glide__slide").length;
      }

    }

    $('.glide__bullet').removeClass('active');
    $('.glide__slide').removeClass('active').removeAttr('style');
    $('#slide-' + whichSlide).addClass('active');
    $('#button-' + whichSlide).addClass('active');

    makeSomeTiles(whichSlide);
  });


  function makeSomeTiles(whichSlide) {
    var i = (10 - whichSlide);
    $('.glide__slide').each(function(index) {
      var letDoThis;
      var indexRedux = (index + 1);
      if (indexRedux == whichSlide) {
        $(this).css({
          'z-index': '1000',
          'transform': 'scale(1)'
        });
        i = 8;
      }

      if (indexRedux < whichSlide) {
        $(this).css({
          'z-index': (indexRedux + 1),
          'transform': 'scale(1, ' + ((i / 10) + .08) + ')'
        });
        i++;
      }

      if (indexRedux > whichSlide) {
        $(this).css({
          'z-index': (10 - indexRedux),
          'transform': 'scale(1, ' + ((i / 10) + .08) + ')'
        });
        i--;
      }

    });

  }



});
