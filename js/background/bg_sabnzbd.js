// Docs:
// http://wiki.sabnzbd.org/api


function getSabnzbdHistory(callback) {
  chrome.storage.sync.get({
    SAB_address: '',
    SAB_port: '',
    SAB_key: '',
    SAB_history: ''
  }, function(items) {
    var url = items.SAB_address + ":" + items.SAB_port + "/sabnzbd/api?";
    var historyMode = "mode=history&limit=" + items.SAB_history;
    var output = "&output=json";
    var apiKey = "&apikey=" + items.SAB_key;

    $.ajax({
      url: url + historyMode + output + apiKey,
      dataType: 'json',
      async: false,
      timeout: 3000,
      success: function(history) {
        localStorage.setItem("SabnzbdHistory", JSON.stringify(history));
        localStorage.setItem("SabnzbdHistory_error", false);
      },
      error: function(xhr, ajaxOptions, thrownError) {
        console.log(xhr, ajaxOptions, thrownError);
        localStorage.setItem("SabnzbdHistory_error", true);
      }
    });

    if (callback) {
      callback();
    }
  });
}

function getSabnzbdQueue(callback) {
  chrome.storage.sync.get({
    SAB_address: '',
    SAB_port: '',
    SAB_key: '',
    SAB_history: ''
  }, function(items) {
    var url = items.SAB_address + ":" + items.SAB_port + "/sabnzbd/api?";
    var queueMode = "mode=queue";
    var output = "&output=json";
    var apiKey = "&apikey=" + items.SAB_key;

    $.ajax({
      url: url + queueMode + output + apiKey,
      dataType: 'json',
      async: false,
      timeout: 3000,
      success: function(queue) {
        localStorage.setItem("SabnzbdQueue", JSON.stringify(queue));
        localStorage.setItem("SabnzbdQueue_error", false);
      },
      error: function(xhr, ajaxOptions, thrownError) {
        console.log(xhr, ajaxOptions, thrownError);
        localStorage.setItem("SabnzbdQueue_error", true);
      }
    });

    sabHTML();
    if (callback) {
      callback();
    }
  });
}

function sabHTML() {
  console.log('sabHTML');
  var history = '<h2>History</h2>';
  var queue = '<h2>Queue</h2>';

  if (localStorage.SabnzbdQueue) {
    var queueJson = JSON.parse(localStorage.getItem('SabnzbdQueue'));

    $.each(queueJson.queue.slots, function(i, qItem) {
      queue += '<core-item label="' + qItem.filename + '"></core-item>';
    });

    if (queueJson.queue.slots.length < 1) {
      queue += '<core-item label="No items in queue at this moment."></core-item>';
    }

    localStorage.setItem('SabnzbdQueueHTML', queue);
  }

  if (localStorage.SabnzbdHistory) {
    var historyJson = JSON.parse(localStorage.getItem('SabnzbdHistory'));

    $.each(historyJson.history.slots, function(i, hItem) {
      history += '<core-item label="' + hItem.name + '"></core-item>';
    });

    if (historyJson.history.slots.length < 1) {
      history += '<core-item label="No items in history at this moment."></core-item>';
    }

    localStorage.setItem('SabnzbdHistoryHTML', history);
  }
}
