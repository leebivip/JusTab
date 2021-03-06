$.when(serviceDataRefreshDone).done(function() {
  if (serviceData.GH.status) {
    $('.refresh-gh').click(function() {
      $('#github .error:visible').slideUp(400);

      $('.refresh-gh').fadeOut(400, function() {
        $(this).html(serviceData.spinner);
        $(this).fadeIn(400, function() {
          chrome.runtime.getBackgroundPage(function(backgroundPage) {
            backgroundPage.getGithubData(function() {
              $('.refresh-gh').fadeOut(400, function() {
                $(this).html('<img src="img/icons/refresh.svg" alt="Refresh Github" draggable=false>');
                $(this).fadeIn(400);
              });
            });
          });
        });
      });
    });
  }
});

function ghShowData() {
  $('.gh-links').empty();
  var error = serviceData.GH.error;

  if (error == "true") {
    $('#github .error').slideDown('slow');
  }
  if (error == "false") {
    $('#github .error').slideUp('slow');
  }

  $('.gh-links').html(serviceData.GH.HTML);
}
