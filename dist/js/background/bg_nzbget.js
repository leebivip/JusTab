function getNzbgetQueue(a){var b=serviceData.NG.apiUrl,c="/listgroups";$.ajax({url:b+c}).done(function(a){localStorage.setItem("NzbgetQueue",JSON.stringify(a)),serviceData.NG.queue.JSON=a,localStorage.setItem("NzbgetQueue_error",!1),serviceData.NG.queue.error=!1,ngqHTML()}).fail(function(a,b,c){console.log(a,b,c),localStorage.setItem("NzbgetQueue_error",!0),serviceData.NG.queue.error=!0}).always(function(){a&&a()})}function getNzbgetHistory(a,b){var c=serviceData.NG.apiUrl,d="/history";$.ajax({url:c+d}).done(function(b){localStorage.setItem("NzbgetHistory",JSON.stringify(b)),serviceData.NG.JSON=b,localStorage.setItem("NzbgetHistory_error",!1),serviceData.NG.error=!1,nghHTML(a)}).fail(function(a,b,c){console.log(a,b,c),localStorage.setItem("NzbgetHistory_error",!0),serviceData.NG.error=!0}).always(function(){b&&b()})}function ngqHTML(){if(serviceData.NG.queue.JSON){var a,b=serviceData.NG.queue.JSON,c="<h2>Queue</h2>";$.each(b.result,function(b,d){a=d.DownloadedSizeMB/(d.FileSizeMB/100),c+='<div class="core-item ng-item-container without-hover"><div class="ng-item-name">'+d.NZBName+'</div><div class="ng-item-status">'+d.Status+" - "+Math.round(a)+"%</div></div>"}),b.result.length<1&&(c+='<div class="core-item without-hover">No items in queue at this moment.</div>'),localStorage.setItem("NzbgetQueueHTML",c),serviceData.NG.queue.HTML=c}}function nghHTML(a){if(serviceData.NG.history.JSON){var b=serviceData.NG.history.JSON,c="<h2>History</h2>";console.log(a),$.each(b.result.slice(0,a),function(a,b){c+='<div class="core-item ng-item-container"><div class="ng-item-name">'+b.Name+'</div><div class="core-item-icon"><div class="expand-more-icon"></div></div></div><div class="ng-collapse core-collapse"><div class="ng-collapse-status">'+b.Status+"</div></div>"}),b.result.length<1&&(c+='<div class="core-item without-hover">No items in history at this moment.</div>'),localStorage.setItem("NzbgetHistoryHTML",c),serviceData.NG.history.HTML=c}}