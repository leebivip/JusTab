function rdShowData(){$(".rd-links").empty();var a=serviceData.RD.error;"true"==a&&$("#reddit .error").slideDown("slow"),"false"==a&&$("#reddit .error").slideUp("slow"),$(".rd-links").html(serviceData.RD.HTML)}$.when(serviceDataRefreshDone).done(function(){serviceData.RD.status&&$(".refresh-rd").click(function(){$("#reddit .error:visible").slideUp(400),$(".refresh-rd").fadeOut(400,function(){$(this).html(serviceData.spinner),$(this).fadeIn(400,function(){chrome.runtime.getBackgroundPage(function(a){a.getRedditData(function(){$(".refresh-rd").fadeOut(400,function(){$(this).html('<img src="img/icons/refresh.svg" alt="Refresh Reddit" draggable=false>'),$(this).fadeIn(400)})})})})})}),$("#reddit .panel-header .panel-header-foreground .bottom a").attr("href","https://www.reddit.com/r/"+serviceData.RD.subreddit)});