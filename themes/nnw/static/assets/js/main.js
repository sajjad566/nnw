$(window).on('load',function() {
  $(".preloader").delay(0).fadeOut("slow");
});
function openNav() {
  	document.getElementById("mySidenav").style.width = "100%";
  	setTimeout(function() { document.getElementById("sidenav-content").style.opacity = "1"; }, 300);
  
}
function closeNav() {
	document.getElementById("sidenav-content").style.opacity = "0";
	setTimeout(function() { document.getElementById("mySidenav").style.width = "0"; }, 300);
}

$('.fix-link').hover(function(){
    $('.holding-page-text>p').html('90-day plan to profitability');
}, function (e) {
  $('.holding-page-text>p').html('Uniquely positioned to advise across all stages of agency journey. From turn-around to sale and transition.');
});
$('.build-link').hover(function(){
    $('.holding-page-text>p').html('Organisation-wide tune up');
}, function (e) {
  $('.holding-page-text>p').html('Uniquely positioned to advise across all stages of agency journey. From turn-around to sale and transition.');
});
$('.grow-link').hover(function(){
    $('.holding-page-text>p').html('Growth acceleration advisory');
}, function (e) {
  $('.holding-page-text>p').html('Uniquely positioned to advise across all stages of agency journey. From turn-around to sale and transition.');
});
$('.sell-link').hover(function(){
    $('.holding-page-text>p').html('Exit strategies and value realisation');
}, function (e) {
  $('.holding-page-text>p').html('Uniquely positioned to advise across all stages of agency journey. From turn-around to sale and transition.');
});
$('.run-link').hover(function(){
    $('.holding-page-text>p').html('Post-acquisition management services');
}, function (e) {
  $('.holding-page-text>p').html('Uniquely positioned to advise across all stages of agency journey. From turn-around to sale and transition.');
});

jQuery(document).ready(function(){

    function detect_active(){
        // get active
        var get_active = $("#dp-slider .dp_item:first-child").data("class");
        $("#dp-dots li").removeClass("active");
        $("#dp-dots li[data-class="+ get_active +"]").addClass("active");
      }
      $("#dp-next").click(function(){
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
          $(dp_item).attr('data-position', index + 1);
        });
        detect_active();

      });

      // function automaticPlay() {
      //   var total = $(".dp_item").length;
      //   $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
      //   $.each($('.dp_item'), function (index, dp_item) {
      //     $(dp_item).attr('data-position', index + 1);
      //   });
      //   detect_active();
      // }

      setInterval(automaticPlay,4000);

      $("#dp-prev").click(function(){
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
          $(dp_item).attr('data-position', index + 1);
        });

        detect_active();
      });

      $("#dp-dots li").click(function(){
        $("#dp-dots li").removeClass("active");
        $(this).addClass("active");
        var get_slide = $(this).attr('data-class');
        console.log(get_slide);
        $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
          $(dp_item).attr('data-position', index + 1);
        });
      });


      $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function(){
        var get_slide = $(this).attr('data-class');
        console.log(get_slide);
        $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
          $(dp_item).attr('data-position', index + 1);
        });

        detect_active();
      });
});

$('.bio-open-btn').click(function() {
  if ($(this).find('.minus-icon').hasClass('d-none')) {
    $(this).find('.plus-icon').addClass('d-none');
    $(this).find('.minus-icon').removeClass('d-none');
  } else if ($(this).find('.plus-icon').hasClass('d-none')) {
    $(this).find('.plus-icon').removeClass('d-none');
    $(this).find('.minus-icon').addClass('d-none');
  }
  
});
