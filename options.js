// Saves options to chrome.storage
function save_options() {
  var hourly = document.getElementById('hourly').value;
  chrome.storage.sync.set({
    hourlyWage: hourly,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores preferences stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    hourlyWage: 25,
  }, function(items) {
    document.getElementById('hourly').value = items.favoriteColor;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
