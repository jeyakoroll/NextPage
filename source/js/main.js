$(document).ready(function() {
  var headerSlider = $('.header__slider-content'),
      popup = $('.cd-popup'),
      popupOpen = $('.cd-popup-trigger'),
      feedbackTitle = $('.feedback__title'),
      feedbackBottom = $('.feedback__bottom'),
      feedbackButton = $('.feedback__button'),
      footer = $('.footer');
  
  // reviews
  headerSlider.owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    autoplay: true,
    nav: true,
    dots: true,
    navContainer: '.header__slider-navs',
    dotsContainer: '.header__dots-wrap',
    autoplayTimeout: 4000,
    responsiveClass: true,
    center: true,
    autoWidth: true,
    loop:true,
    items: 1,
    responsive:{
        0:{
          margin: 60,
          items: 1
        },
        490:{
          margin: 200
        },
        1150:{
          margin: 150
        },
        1375:{
          margin: 40
        },
        1535:{
          // margin: 20
        }
    }
  });


  //open popup
  popupOpen.on('click', function(event){
    event.preventDefault();
    popup.addClass('is-visible');
    feedbackTitle.addClass('hide');
    feedbackBottom.addClass('hide');
    feedbackButton.addClass('hide');
    footer.addClass('hide');
  });
  
  //close popup
  popup.on('click', function(event){
    if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
      event.preventDefault();
      $(this).removeClass('is-visible');
      feedbackTitle.removeClass('hide');
      feedbackBottom.removeClass('hide');
      feedbackButton.removeClass('hide');
      footer.removeClass('hide');
    }
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function(event){
    if(event.which=='27'){
      popup.removeClass('is-visible');
      feedbackTitle.removeClass('hide');
      feedbackBottom.removeClass('hide');
      feedbackButton.removeClass('hide');
      footer.removeClass('hide');
    }
  });

})