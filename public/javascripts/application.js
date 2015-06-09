jQuery(document).ready(function () {
  jQuery(document).on('click','[data-scroll-target]', function (e) {
    e.preventDefault();
    var target = jQuery(this).data("scroll-target");
    jQuery('html, body').animate({
      scrollTop: jQuery(target).offset().top
    }, 1000);
  });
});