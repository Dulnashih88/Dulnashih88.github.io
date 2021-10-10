$(document).ready(function(){

    AOS.init();

    $("[data-trigger]").on("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        var offcanvas_id =  $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
        $(".screen-overlay").toggleClass("show");
    }); 
    
    $(".btn-close").click(function(e){
       $(".screen-overlay").removeClass("show");
       $(".offcanvas").removeClass("show");
       $('.animated-icon3').removeClass('open');
       $('.animated-icon3').toggleClass('close');
       $("body").removeClass("offcanvas-active");
    });

    $('.third-button').on('click', function () {
        $('.animated-icon3').toggleClass('open');
    });

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 54){
          $(".navbar").addClass('shadow').removeClass('shadow-none');
        } else{
          $(".navbar").removeClass('shadow').addClass('shadow-none');
        }
    })

});

var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination-1",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 10,
      }
    }
  });
  
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination-2",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      }
    }
  });
  
  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination-3",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      }
    }
  });
