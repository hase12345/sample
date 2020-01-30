$(function(){
  $('.top').click(function(){
    $('html, body').animate({
      'scrollTop':0
    },'slow');
  });
  
  $('#service').click(function(){
    $('html, body').animate({
      'scrollTop':0
    },'slow');
  });
  
  $('#member').click(function(){
    $('html, body').animate({
      'scrollTop':0
    },'slow');
  });
  
  $('#menu-icon').click(function(){
    $('.menu-nav').slideToggle();
    $('#menu-icon').hide();
    $('#menu-cancel').fadeIn();
  });

  $('#menu-cancel').click(function(){
    $('.menu-nav').slideToggle();
    $('#menu-cancel').hide();
    $('#menu-icon').fadeIn();
  });
});
