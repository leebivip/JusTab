$(document).ready(function(){$(".panel-content").scroll(function(a){var b=a.target.scrollTop,c=$(this).prev(".panel-header"),d=c.find(".top"),e=c.find(".panel-header-background2"),f=1-b*(1/64);a.target.scrollTop<64&&(c.height(128-b),d.height(64-b),d.css("opacity",f),e.css("opacity",f)),b>64?(c.height(64),d.height(0),d.hide(),e.hide()):(d.show(),e.show())})});