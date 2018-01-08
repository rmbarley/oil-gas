// Handle image toggle when user clicks on image map
window.toggleView = function(view) {
  if ($(view).hasClass('hide')) {
    $('.mapster_tooltip').css('display', 'none')
    $('.map_area').fadeToggle(300, 'linear', function() {
      $('.map').trigger('click');
      $(view).toggleClass('hide');
    });
  } else {
    $(view).toggleClass('hide');
    $('.map_area').fadeToggle(300, 'linear');
  }
}

window.applyBlur = function() {
  $('img[src$="_map.jpg"]').css({'filter': 'blur(3px)',
    'transition': 'all 0.4s ease', '-ms-filter': 'blur(3px)'
  });
}
window.removeBlur = function() {
  $('img[src$="_map.jpg"]').css('filter', '');
}

// When modal closes, scroll to top of screen
$(window).on('hidden.bs.modal', function (e) {
  window.scrollTo(0,0);
});

$('.modal-spot').on('click', function(){

	$(this).unbind('click.zoomNotClickable');

  $("#shakerTableModal").modal();

})
