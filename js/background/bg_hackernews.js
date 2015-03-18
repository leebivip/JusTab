// Docs:
// https://github.com/HackerNews/API

function getHackerNewsData(callback) {
  var url = 'https://hacker-news.firebaseio.com/v0/';
  var apiCall = "topstories.json";

  $.when($.ajax({
    url: url + apiCall,
    dataType: 'json',
    success: function(data) {
      localStorage.setItem("Hackernews_error", false);
      serviceData.HN.error = false;

      getHackerNewsStories(data.slice(0,25), callback);
    },
    error: function(xhr, ajaxOptions, thrownError) {
      console.log(xhr, ajaxOptions, thrownError);
      localStorage.setItem("Hackernews_error", true);
      serviceData.HN.error = true;
    }
  }));
}

function getHackerNewsStories(data, callback) {
  var hnJSON = [];
  var promises = [];

  $.each(data, function(index, val) {
    var url = 'https://hacker-news.firebaseio.com/v0/';
    var apiCall = "item/" + val + ".json";

    promises.push($.ajax({
      url: url + apiCall,
      dataType: 'json',
      success: function(data) {
        hnJSON = hnJSON.concat(data);
      },
      error: function(xhr, ajaxOptions, thrownError) {
        console.log(xhr, ajaxOptions, thrownError);
        localStorage.setItem("Hackernews_error", true);
        serviceData.HN.error = true;
      }
    }));
  });

  $.when.apply($, promises).done(function() {
    localStorage.setItem("Hackernews", JSON.stringify(hnJSON));
    serviceData.HN.JSON = hnJSON;

    hnHTML();

    if (callback) {
      callback();
    }
  });
}

function hnHTML() {
  if (serviceData.HN.JSON) {
    data = serviceData.HN.JSON;
    var hn_links = '';

    $.each(data, function(i, story) {
      hn_links +=
        '<div class="core_item waves-effect hn_link_container">' +
          '<a href="' + story.url + '" class="hn_story_url" target="_blank">' +
            story.title +
          '</a>' +
          '<a href="https://news.ycombinator.com/item?id=' + story.id + '" class="hn_comments_url" target="_blank">' +
            story.descendants + ' comments - ' + story.score + ' points' +
          '</a>' +
        '</div>';
    });

    localStorage.setItem('HackernewsHTML', hn_links);
    serviceData.DN.HTML = hn_links;
  }
}