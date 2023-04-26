// Sembunyikan navbar dan sidebar saat halaman pertama kali dimuat di section 1
$(document).ready(function() {
  if ($(window).scrollTop() === 0) {
    $('nav, .sidebar').css('display', 'none');
  }
});


$(document).ready(function () {
  $(window).scroll(function () {
    var tinggi = 10;
      var section1Bottom = $('#section__1').offset().top + $('#section__1').height() - tinggi;

      if ($(window).scrollTop() > section1Bottom) {
          $('nav').fadeIn();
      } else {
          $('nav').fadeOut();
      }
  });
});