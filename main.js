 //Improved Script for preloader

$(window).on('load', function(){
    $('.preloader-overlay').fadeOut();
});

//Script for smooth scrolling
 $(document).ready(function (){
            $(".home_link").click(function (){
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
            });
            $(".about_btn").click(function (){
                $('html, body').animate({
                    scrollTop: $(".about").offset().top - 50
                }, 1000);
            });
           $(".imp_dates_btn").click(function (){
                $('html, body').animate({
                    scrollTop: $(".important-dates").offset().top -50
                }, 1000);
            });
           $(".committees_btn").click(function (){
                $('html, body').animate({
                    scrollTop: $(".committee").offset().top - 50
                }, 1000);
            });
           $(".reg_details_btn").click(function (){
                $('html, body').animate({
                    scrollTop: $(".registration_details").offset().top - 50
                }, 1000);
            });
           $(".past_conf_btn").click(function (){
                $('html, body').animate({
                    scrollTop: $(".past_conf").offset().top - 50
                }, 1000);
            });
            $(".call_for_paper").click(function(){
              $('html, body').animate({
                  scrollTop: $(".call-for-paper").offset().top - 50
              }, 1000);
            });

           $(".gall_btn").click(function (){
                $('html, body').animate({
                    scrollTop: $(".gallery-block").offset().top - 50
                }, 1000);
            });
           $(".highlights_btn").click(function (){
                $('html, body').animate({
                    scrollTop: $(".highlights").offset().top - 50
                }, 1000);
            });

           $(".loc_btn").click(function (){
                $('html, body').animate({
                    scrollTop: $(".location").offset().top - 80
                }, 1000);
            });



        });


    //Dark background to transparent background navbar conversion
      $(document).ready(function() {
        $(window).scroll(function() {
          if($(this).scrollTop() > 100) {
              $('.menu-nav').removeClass('bg-transparent');
              $('.menu-nav').addClass('bg-dark');
          } else {
              $('.menu-nav').removeClass('bg-dark');
              $('.menu-nav').addClass('bg-transparent');

          }
        });
      });



//Script for AJAX dynamic page load and class removal on event trigger( viewport width reduction )

$(document).ready(function(){

              if ($(window).width()>600 && $(window).width() < 800) {

                 $('.card').removeClass("ml-auto mr-auto");
              }else{
                  $('.card').addClass("ml-auto mr-auto");

              }


            //AJAX scripts

            //Default
           $('.section-text').load('assets/includes/advisoryBoard.html');

            $('.load-1').click(function(){
                 $('.section-text').load('assets/includes/advisoryBoard.html');
            });
            $('.load-2').click(function(){
                 $('.section-text').load('assets/includes/organizingCommittee.html');
            });
            $('.load-3').click(function(){
                 $('.section-text').load('assets/includes/technicalCommittee.html');
            });


});
