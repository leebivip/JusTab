// Docs:
// http://developers.news.layervault.com/

function getDesignerNewsData(callback) {
  var url = 'https://api-news.layervault.com/api/v2/';
  var apiCall = "stories";
  var apiKey = "?client_id=e7c9f9422feb744c661cc25a248d3b7206962f0605e174ae30aab12a05fb107a";

  $.when($.ajax({
    url: url + apiCall + apiKey,
    dataType: 'json',
    async: false,
    timeout: 3000,
    success: function(data) {
      localStorage.setItem("Designernews_error", false);
      serviceData.DN.error = false;
      localStorage.setItem("Designernews", JSON.stringify(data));
      serviceData.DN.JSON = data;
    },
    error: function(xhr, ajaxOptions, thrownError) {
      console.log(xhr, ajaxOptions, thrownError);
      localStorage.setItem("Designernews_error", true);
      serviceData.DN.error = true;
    }
  })).then(function() {
    $.ajax({
      url: 'https://api-news.layervault.com/api/v2/me?include=upvotes',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + serviceData.DN.token);
      },
      type: 'GET',
      success: function(data){
        localStorage.setItem('DesignernewsMe', JSON.stringify(data.users[0]));
        serviceData.DN.personal = data.users[0];

        var upvotes = [];
        $.each(data.linked.upvotes, function(index, val) {
          upvotes.push(val.links.story);
        });
        localStorage.setItem('DesignernewsUpvotes', upvotes);
        serviceData.DN.upvotes = upvotes;
      },
      error: function(xhr, ajaxOptions, thrownError){
        console.log(xhr, ajaxOptions, thrownError);
      }
    });

    chrome.storage.sync.get({
      DN_status: '',
      DN_username: '',
      DN_password: '',
    }, function(items) {
      if (items.DN_status) {
        $.ajax({
          url: 'https://api-news.layervault.com/oauth/token',
          data: {
            username: items.DN_username,
            password: items.DN_password,
            grant_type: "password"
          },
          type: 'POST',
          success: function(data){
            localStorage.setItem('DesignernewsAuth', data.access_token);
            serviceData.DN.token = data.access_token;
          },
          error: function(xhr, ajaxOptions, thrownError){
            console.log(xhr, ajaxOptions, thrownError);
          }
        });
      }
    });

    dnHTML();

    if (callback) {
      callback();
    }
  });
}

function dnHTML() {
  if (serviceData.DN.JSON) {
    data = serviceData.DN.JSON;
    upvotes = serviceData.DN.upvotes;
    var dn_links = '';

    $.each(data.stories, function(i, story) {
      if (!story.url) {
        story.url = 'https://news.layervault.com/stories/' + story.id;
      }

      if (upvotes.indexOf(story.id) == -1) {
        dn_links +=
          '<core-item class="dn_link_container">' +
            '<a href="' + story.url + '" class="dn_story_url" target="_blank">' +
              story.title +
              '<paper-ripple fit></paper-ripple>' +
            '</a>' +
            '<a href="https://news.layervault.com/stories/' + story.id + '" class="dn_comments_url" target="_blank">' +
              story.comment_count + ' comments - ' + story.vote_count + ' points' +
            '</a>' +
            '<div class="dn_upvote_container">' +
              '<core-icon icon="thumb-up" class="dn_upvote" id="' + story.id + '"></core-icon>' +
            '</div>' +
          '</core-item>';
      }
      else {
        dn_links +=
          '<core-item class="dn_link_container">' +
            '<a href="' + story.url + '" class="dn_story_url" target="_blank">' +
              story.title +
              '<paper-ripple fit></paper-ripple>' +
            '</a>' +
            '<a href="https://news.layervault.com/stories/' + story.id + '" class="dn_comments_url" target="_blank">' +
              story.comment_count + ' comments - ' + story.vote_count + ' points' +
            '</a>' +
            '<div class="dn_upvote_container">' +
              '<core-icon icon="thumb-up" class="dn_upvote_done" id="' + story.id + '"></core-icon>' +
            '</div>' +
          '</core-item>';
      }
    });

    localStorage.setItem('DesignernewsHTML', dn_links);
    serviceData.DN.HTML = dn_links;
  }
}