// Initialize scrollify for snap scrolling
$(function() {
  $.scrollify({
    section : ".slide",
  });
});

// initialize amplitude for playing audio
Amplitude.init({
  "songs": [
    {"url": "audio/test.mp3"},
    {"url": "audio/test2.mp3"}
  ],
  "callbacks": {
    'time_update': function(){
      var percent = Amplitude.getSongPlayedPercentage() + '%';
      var active_index = Amplitude.getActiveIndex();
      // update currently active progress bar, set all others to empty
      for (i = 0; i < 7; i++) {
        var currbar = '#progress' + i;
        if (i == active_index) {
          $(currbar).width(percent);
        }
        else {
          $(currbar).width(0);
        }
      }
    }
  }
});
