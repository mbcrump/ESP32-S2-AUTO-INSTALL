function secHeight() {
  var vpHeight = $(window).height();
  $('section').css('min-height', vpHeight);
}

function mClose() {
  if ($('#menu').hasClass('on')) {
      $('#menu').addClass('off').removeClass('on');
  }
}

function animatescroll(id) {
  $('body, html').animate({
    scrollTop: $(id).offset().top
  }, 500);
}

function mSection() {
  var topHome = $('#home').offset().top,
      topAbout = $('#install').offset().top,
      topCont = $('#video').offset().top,
      menuAll = $('#menu a').removeClass('active');
  
  if ($(window).scrollTop() < topAbout) {
    menuAll;
    $('#menu a:contains("Home")').addClass('active');
  } else if ($(window).scrollTop() >= topCont) {
    menuAll;
    $('#menu a:contains("Video")').addClass('active');
  } else if ($(window).scrollTop() >= topAbout) {
    menuAll;
    $('#menu a:contains("Install")').addClass('active');
  }
}

$(document).ready(function(){
  var menu = $('#menu');
  $('.icon').click(function() {
    menu.toggleClass('on').toggleClass('off');
  });
  
  var menuItem = $('#menu a');
  menuItem.click(function() {
    if (!$(this).hasClass('active')) {
      menuItem.removeClass('active');
      $(this).addClass('active');
    }
  });
  
  secHeight();
  
  if ($('.icon').css('display') == 'none') {
    $('#menu').removeClass('off').removeClass('on');
  } else if ($('.icon').css('display') == 'block' && !$('#menu').is('.off, .on')) {
    $('#menu').addClass('off');
  } 
});

$(window).resize(function(){
  secHeight();
  if ($('.icon').css('display') == 'none') {
    $('#menu').removeClass('off').removeClass('on');
  } else if ($('.icon').css('display') == 'block' && !$('#menu').is('.off, .on')) {
    $('#menu').addClass('off');
  } 
});

$(window).scroll(function() {
  mClose(); mSection();
});

$(document).mouseup(function(e) {
  var container = $('#menu');
  
  if (!container.is(e.target) && container.has(e.target).length === 0 && container.hasClass('on') && !$('.icon').is(e.target)) {
    container.addClass('off').removeClass('on');
  }
});
