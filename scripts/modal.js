$(document).ready(function(){

  // MODAL
  var modalText = {
    roambi: {
      title: 'Bespider.com',
      tag: 'WEB-DEVELOPMENT TOOL.',
      detail: 'Bespider is turn key solution to develop websites without knowing technical aspects. It is one of the top 100 startups of the world. It is developed in Angular and PHP.',
      link: 'http://www.bespider.com'
    },
    walker: {
      title: 'EZRent L.L.C',
      tag: 'Rental Application.',
      detail: 'EZRent LLC is a USA based Rental company which helps US citizens to find better living and also provide platform to landlords to register their land and earn more through this system.',
    },
    powur: {
      title: 'UAECT',
      tag: 'CERTIFIED TRADERS.',
      detail: 'UAECT is a buying and selling platform for people of UAE where all the sellers are certified by the company itself and quality measures are applied on them. I developed their mobile application using Ionic4 + Angular 7.',
      link: 'http://www.uaect.com'
    },
    mystand: {
      title: 'Gloub DK',
      tag: 'Event Advertisement.',
      detail: 'Gloub DK is comapny of Denmark which provide event promotion to various kind of event orgnizing companies. It is developed in native danish language as it targets danish nationals. I used Angular 7 and Google Firestore for its development.',
      link: 'https://www.dashboard.globu.dk'
    },
    never: {
      title: 'Wunderman',
      tag: 'Creatively Driven. Data Inspired.',
      detail: 'Developing Artificial Intelligence based quality products using latest technologies like Angular 8, PHP. This product is innovation specially in Middle East and has  been accepted by many big companies very warmly.',
    },
    themall: {
      title: 'Bloovo',
      tag: 'Where Jobs Are Born',
      detail: 'Developing Artificial Intelligence based quality products using latest technologies like Angular 8, Ruby on Rails and Python  for data science. This product is innovation specially in Middle East and has  been accepted by many big companies very warmly.',
      link: 'https://www.bloovo.com'
    }
  };

  $('#gallery .button').on('click', function(){
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth/3,
      dragStart, 
      dragEnd;

  setDimensions();

  $('#next').click(function(){ shiftSlide(-1) })
  $('#prev').click(function(){ shiftSlide(1) })

  carousel.on('mousedown', function(){
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function(){
      dragEnd = event.pageX;
      $(this).css('transform','translateX('+ dragPos() +'px)');
    });
    $(document).on('mouseup', function(){
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
    setTimeout(function(){
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform','translateX(0px)'); 
    },700)
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link) $('#modal .button').addClass('visible')
                                               .parent()
                                               .attr('href', modalText[id].link)

    $.each($('#modal li'), function(index, value ) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background: "url('img/slides/" + id + '-' + index + ".png') center center/cover",
        backgroundSize: 'cover'
      });
              
    });
  }
})
