function save_status_options(){chrome.storage.sync.set({GC_status:$("input[type=checkbox][name=GC_status]").is(":checked"),GM_status:$("input[type=checkbox][name=GM_status]").is(":checked"),FB_status:$("input[type=checkbox][name=FB_status]").is(":checked"),CP_status:$("input[type=checkbox][name=CP_status]").is(":checked"),SB_status:$("input[type=checkbox][name=SB_status]").is(":checked"),SAB_status:$("input[type=checkbox][name=SAB_status]").is(":checked"),DN_status:$("input[type=checkbox][name=DN_status]").is(":checked"),HN_status:$("input[type=checkbox][name=HN_status]").is(":checked"),GH_status:$("input[type=checkbox][name=GH_status]").is(":checked"),PH_status:$("input[type=checkbox][name=PH_status]").is(":checked"),DR_status:$("input[type=checkbox][name=DR_status]").is(":checked"),RD_status:$("input[type=checkbox][name=RD_status]").is(":checked"),NG_status:$("input[type=checkbox][name=NG_status]").is(":checked"),SO_status:$("input[type=checkbox][name=SO_status]").is(":checked")},function(){chrome.runtime.getBackgroundPage(function(a){a.refreshServiceData(),a.createAlarms()})})}function save_options(){var a=[];$.each($(".calendar-checkbox.checked"),function(){a.push($(this).data("id"))}),FB_url=formatUrl("FB-url"),CP_address=formatUrl("CP-address"),SB_address=formatUrl("SB-address"),SAB_address=formatUrl("SAB-address"),NG_address=formatUrl("NG-address"),SO_address=formatUrl("SO-address"),chrome.storage.sync.set({calendars:a,GC_days:$("#GC-days").val(),GC_width:$("#GC-width").val(),GC_refresh:$("#GC-refresh").val(),GM_emails:$("#GM-emails").val(),GM_width:$("#GM-width").val(),GM_refresh:$("#GM-refresh").val(),FB_url:FB_url,FB_width:$("#FB-width").val(),FB_refresh:$("#FB-refresh").val(),CP_address:CP_address,CP_port:$("#CP-port").val(),CP_key:$("#CP-key").val(),CP_width:$("#CP-width").val(),CP_refresh:$("#CP-refresh").val(),SB_address:SB_address,SB_port:$("#SB-port").val(),SB_key:$("#SB-key").val(),SB_width:$("#SB-width").val(),SB_refresh:$("#SB-refresh").val(),SAB_address:SAB_address,SAB_port:$("#SAB-port").val(),SAB_key:$("#SAB-key").val(),SAB_history:$("#SAB-history").val(),SAB_width:$("#SAB-width").val(),SABQ_refresh:$("#SABQ-refresh").val(),SABH_refresh:$("#SABH-refresh").val(),DN_width:$("#DN-width").val(),DN_refresh:$("#DN-refresh").val(),HN_width:$("#HN-width").val(),HN_refresh:$("#HN-refresh").val(),GH_width:$("#GH-width").val(),GH_refresh:$("#GH-refresh").val(),PH_width:$("#PH-width").val(),PH_refresh:$("#PH-refresh").val(),DR_small_images:$(".dr-small-images-checkbox").hasClass("checked"),DR_gifs:$(".dr-gif-checkbox").hasClass("checked"),DR_width:$("#DR-width").val(),DR_refresh:$("#DR-refresh").val(),RD_subreddit:$("#RD-subreddit").val(),RD_sorting:$("#RD-sorting").val(),RD_width:$("#RD-width").val(),RD_refresh:$("#RD-refresh").val(),NG_address:NG_address,NG_port:$("#NG-port").val(),NG_width:$("#NG-width").val(),NGQ_refresh:$("#NGQ-refresh").val(),NGH_refresh:$("#NGH-refresh").val(),NGH_length:$("#NGH-length").val(),NG_username:$("#NG-username").val(),NG_password:$("#NG-password").val(),SO_address:SO_address,SO_port:$("#SO-port").val(),SO_key:$("#SO-key").val(),SO_width:$("#SO-width").val(),SO_refresh:$("#SO-refresh").val()},function(){chrome.runtime.getBackgroundPage(function(a){a.refreshServiceData(),a.createAlarms()});var a=$(".status");a.html("Options saved."),a.css("bottom","16px"),setTimeout(function(){a.css("bottom","-48px"),a.html("")},1e3)})}function restore_options(){$("input[type=checkbox][name=GC_status]").attr("checked",serviceData.GC.status),$("#GC-days").val(serviceData.GC.days),$("#GC-width").val(serviceData.GC.panelWidth),$("#GC-refresh").val(serviceData.GC.refresh),$("input[type=checkbox][name=GM_status]").attr("checked",serviceData.GM.status),$("#GM-width").val(serviceData.GM.panelWidth),$("#GM-refresh").val(serviceData.GM.refresh),$("input[type=checkbox][name=FB_status]").attr("checked",serviceData.FB.status),$("#FB-url").val(serviceData.FB.url),$("#FB-width").val(serviceData.FB.panelWidth),$("#FB-refresh").val(serviceData.FB.refresh),$("input[type=checkbox][name=CP_status]").attr("checked",serviceData.CP.status),$("#CP-address").val(serviceData.CP.address),$("#CP-port").val(serviceData.CP.port),$("#CP-key").val(serviceData.CP.key),$("#CP-width").val(serviceData.CP.panelWidth),$("#CP-refresh").val(serviceData.CP.refresh),$("input[type=checkbox][name=SB_status]").attr("checked",serviceData.SB.status),$("#SB-address").val(serviceData.SB.address),$("#SB-port").val(serviceData.SB.port),$("#SB-key").val(serviceData.SB.key),$("#SB-width").val(serviceData.SB.panelWidth),$("#SB-refresh").val(serviceData.SB.refresh),$("input[type=checkbox][name=SAB_status]").attr("checked",serviceData.SAB.status),$("#SAB-address").val(serviceData.SAB.address),$("#SAB-port").val(serviceData.SAB.port),$("#SAB-key").val(serviceData.SAB.key),$("#SAB-history").val(serviceData.SAB.history.length),$("#SAB-width").val(serviceData.SAB.panelWidth),$("#SABQ-refresh").val(serviceData.SAB.queue.refresh),$("#SABH-refresh").val(serviceData.SAB.history.refresh),$("input[type=checkbox][name=DN_status]").attr("checked",serviceData.DN.status),$("#DN-username").val(serviceData.DN.username),$("#DN-password").val(serviceData.DN.password),$("#DN-width").val(serviceData.DN.panelWidth),$("#DN-refresh").val(serviceData.DN.refresh),$("input[type=checkbox][name=HN_status]").attr("checked",serviceData.HN.status),$("#HN-width").val(serviceData.HN.panelWidth),$("#HN-refresh").val(serviceData.HN.refresh),$("input[type=checkbox][name=GH_status]").attr("checked",serviceData.GH.status),$("#GH-width").val(serviceData.GH.panelWidth),$("#GH-refresh").val(serviceData.GH.refresh),$("input[type=checkbox][name=PH_status]").attr("checked",serviceData.PH.status),$("#PH-width").val(serviceData.PH.panelWidth),$("#PH-refresh").val(serviceData.PH.refresh),$("input[type=checkbox][name=DR_status]").attr("checked",serviceData.DR.status),serviceData.DR.smallImages&&$(".dr-small-images-checkbox").addClass("checked"),serviceData.DR.gifs&&$(".dr-gif-checkbox").addClass("checked"),$("#DR-width").val(serviceData.DR.panelWidth),$("#DR-refresh").val(serviceData.DR.refresh),$("input[type=checkbox][name=RD_status]").attr("checked",serviceData.RD.status),$("#RD-subreddit").val(serviceData.RD.subreddit),$("#RD-sorting").val(serviceData.RD.sorting),$("#RD-width").val(serviceData.RD.panelWidth),$("#RD-refresh").val(serviceData.RD.refresh),$("input[type=checkbox][name=NG_status]").attr("checked",serviceData.NG.status),$("#NG-address").val(serviceData.NG.address),$("#NG-port").val(serviceData.NG.port),$("#NG-width").val(serviceData.NG.panelWidth),$("#NGQ-refresh").val(serviceData.NG.queue.refresh),$("#NGH-refresh").val(serviceData.NG.history.refresh),$("#NGH-length").val(serviceData.NG.history.length),$("#NG-username").val(serviceData.NG.username),$("#NG-password").val(serviceData.NG.password),$("input[type=checkbox][name=SO_status]").attr("checked",serviceData.SO.status),$("#SO-address").val(serviceData.SO.address),$("#SO-port").val(serviceData.SO.port),$("#SO-key").val(serviceData.SO.key),$("#SO-width").val(serviceData.SO.panelWidth),$("#SO-refresh").val(serviceData.SO.refresh)}function formatUrl(a){return"https://"==$("#"+a).val().slice(0,8)||"http://"==$("#"+a).val().slice(0,7)?$("#"+a).val():"http://"+$("#"+a).val()}$.when(serviceDataRefreshDone).then(function(){restore_options(),dragula([document.getElementById("services-menu")],{moves:function(a,b,c){return"drag-handle"===c.className},direction:"vertical"}).on("dragend",function(){var a=[];$(".options-menu-link").each(function(b,c){c=$(c),c.data("service-id")&&a.push($(c).data("service-id"))}),localStorage.setItem("serviceOrder",a)});var a=localStorage.getItem("serviceOrder");if(a&&(a=a.split(","),$.each(a,function(a,b){serviceHTML=$("#services-menu").find("[data-service-id="+b+"]"),$("#services-menu").append(serviceHTML)})),$(".options-menu-icon").bind("click",function(){$(".options-menu").hasClass("expanded")?$(".options-menu").removeClass("expanded"):$(".options-menu").addClass("expanded")}),$(".options-menu-link").bind("click",function(){var a=$(this).data("title"),b="#"+$(this).data("color");$(".options-menu").removeClass("expanded"),$(".options-window").hide(),$("."+a).show(),$(".options-menu-link").removeClass("active"),$(this).addClass("active"),$(".options-window-title").css("background-color",b),$(".save-settings").css("color",b),$(".options-window-title-text").text(a),location.hash="#"+a.toLowerCase()}),location.hash){var b=location.hash.split("#")[1].toLowerCase();$(".options-menu-link[data-lowTitle="+b+"]").click()}$(".calendar-loading").html(serviceData.spinner),chrome.identity.getAuthToken({interactive:!0},function(a){var b="https://www.googleapis.com/calendar/v3/users/me/calendarList";$.ajax({url:b+"?oauth_token="+a}).done(function(a){$(".calendar-loading").hide();var b=serviceData.GC.calendars;$.each(a.items,function(a,c){$(".calendar-select-container").append($.inArray(c.id,b)>-1?"<div class='calendar-checkbox checkbox-container checked' data-id="+c.id+"><div class='checkbox'><div class='checkbox-mark'></div></div><span class='checkbox-label'>"+c.summary+"</span></div>":"<div class='calendar-checkbox checkbox-container' data-id="+c.id+"><div class='checkbox'><div class='checkbox-mark'></div></div><span class='checkbox-label'>"+c.summary+"</span></div>")})}).fail(function(a,b,c){console.log(a,b,c),$(".calendar-loading").hide(),$(".calendar-select-container").append('<div><div class="error-icon"></div><p>Failed to connect to Google Calendar check your connection and refresh.</p></div>')})}),$(document).on("change","input, .checkbox-container",function(){save_options()}),$(".DN-login-status").html(serviceData.DN.token?"<div class='done-all-icon'></div>":"<div class='error-icon'></div>"),$(".switch input[type=checkbox]").bind("change",function(){save_status_options()})});