$(function() {
  $('.jquery-dom-css-test').click(function() {
    if ( $('html').hasClass('active') ) {
      $('html').removeClass('active').css('background', '');
    } else {
      var randomHexColor = '#' + Math.floor( Math.random() * 16777215 ).toString(16);
      $('html').addClass('active').css('background', randomHexColor);
    }
  });
});
