document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("homeHeroVid");
    var playButton = document.getElementById("playButton");
  
    // Ensure video is muted initially
    video.muted = true;
  
    // Function to attempt video playback
    function playVideo() {
      // Try to play the video
      if (video.paused) {
        video.play().catch(function (error) {
          console.log("Video autoplay failed:", error);
          // If autoplay fails, show the play button
          playButton.style.display = "block";
        });
      }
    }
  
    // Check if the video is ready to be played
    function setupVideo() {
      // Try playing the video once the data is loaded
      video.addEventListener("loadeddata", function () {
        playVideo();
      });
  
      // Use the 'canplaythrough' event to ensure video is ready to play
      video.addEventListener("canplaythrough", function () {
        playVideo();
      });
    }
  
    // Attempt to play the video on load
    window.addEventListener("load", function () {
      // Deferring play attempt to make sure everything is loaded properly
      requestAnimationFrame(function () {
        playVideo();
      });
    });
  
    // Handle user interaction (for mobile and tablet)
    document.addEventListener("click", function () {
      playVideo();
    });
  
    document.addEventListener("touchstart", function () {
      playVideo();
    });
  
    // Fallback: Clicking the play button should manually start the video
    playButton.addEventListener("click", function () {
      video.play();
      playButton.style.display = "none"; // Hide the play button once video starts
    });
  
    // Set up the video playback after the DOM is ready
    setupVideo();
  });
  