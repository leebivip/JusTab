var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-43316108-4']);
_gaq.push(['_trackPageview']);

$('.refresh-button').each(function(index, button) {
  button.addEventListener('click', trackButton);
})

function trackButton(e) {
  _gaq.push(['_trackEvent', e.target.id, 'clicked']);
};

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();