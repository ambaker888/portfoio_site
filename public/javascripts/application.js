jQuery(document).ready(function () {
  jQuery(document).on('click','[data-show]', function (e) {
    e.preventDefault();
    var target = jQuery(this).data("show");
    console.log(target);
    jQuery(this).closest('.modal-content').hide();
    jQuery(target).show();
  });
});