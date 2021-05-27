$(document).ready(function(){


      // home page carousal
      $('.carousel.home-page-carousal').hover(
            function () { 
                  $(this).carousel('pause');
            },
            function () { 
                  $(this).carousel('cycle'); 
            }
      );

      

      // home page class add on hover dryer section
      $('.dryer-model-right-main').hover(function(){
            $('.dryer-model-left-main').addClass('active');
      }, function(){
            $('.dryer-model-left-main').removeClass('active');
      });  



      // custom sticky navbar with fixed on scroll
      $(window).scroll(function() {

            var windowTop = $(window).scrollTop();
        
            if (windowTop > 90) {
              $('.custom-sticky').addClass('fixed-menu');
            } else {
              $('.custom-sticky').removeClass('fixed-menu');
            }

      });
      


});

