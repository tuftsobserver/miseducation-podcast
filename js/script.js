// Initialize scrollify for snap scrolling
$(function() {
  if ($(window).width() > $(window).height()) {
    $.scrollify({
      section: ".slide",
      updateHash: false,
    });
  }
});

// initialize amplitude for playing audio
Amplitude.init({
  "songs": [
    {"url": "audio/maxine.mp3"},
    {"url": "audio/ava.mp3"},
    {"url": "audio/jady.mp3"},
    {"url": "audio/lona.mp3"},
    {"url": "audio/sasha.mp3"},
    {"url": "audio/rachel.mp3"},
    {"url": "audio/daniela.mp3"}
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
