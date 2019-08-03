document.getElementById('event1').addEventListener("click", function(){
  if (document.getElementById("event1").classList.contains("face1")) {
    document.getElementById("event1").classList.remove('face1');
    document.getElementById("event1").classList.add('face1x');
    document.getElementById("event1x").classList.remove('face2');
    document.getElementById("event1x").classList.add('face2x');
  }
  else if (document.getElementById("event1").classList.contains("face1x")) {
    document.getElementById("event1").classList.remove('face1x');
    document.getElementById("event1").classList.add('face1');
    document.getElementById("event1x").classList.remove('face2x');
    document.getElementById("event1x").classList.add('face2');
  }
  });
  // Interactive Coding Learning Workshop
  document.getElementById('event2').addEventListener("click", function(){
    if (document.getElementById("event2").classList.contains("face1")) {
      document.getElementById("event2").classList.remove('face1');
      document.getElementById("event2").classList.add('face1x');
      document.getElementById("event2x").classList.remove('face3');
      document.getElementById("event2x").classList.add('face3x');
    }
    else if (document.getElementById("event2").classList.contains("face1x")) {
      document.getElementById("event2").classList.remove('face1x');
      document.getElementById("event2").classList.add('face1');
      document.getElementById("event2x").classList.remove('face3x');
      document.getElementById("event2x").classList.add('face3');
    }
    });
    // MSI Campus Meet
  document.getElementById('event3').addEventListener("click", function(){
      if (document.getElementById("event3").classList.contains("face1")) {
        document.getElementById("event3").classList.remove('face1');
        document.getElementById("event3").classList.add('face1x');
        document.getElementById("event3x").classList.remove('face4');
        document.getElementById("event3x").classList.add('face4x');
      }
      else if (document.getElementById("event3").classList.contains("face1x")) {
        document.getElementById("event3").classList.remove('face1x');
        document.getElementById("event3").classList.add('face1');
        document.getElementById("event3x").classList.remove('face4x');
        document.getElementById("event3x").classList.add('face4');
      }
      });
      // Imagine Talks
  document.getElementById('event4').addEventListener("click", function(){
        if (document.getElementById("event4").classList.contains("face1")) {
          document.getElementById("event4").classList.remove('face1');
          document.getElementById("event4").classList.add('face1x');
          document.getElementById("event4x").classList.remove('face5');
          document.getElementById("event4x").classList.add('face5x');
        }
        else if (document.getElementById("event4").classList.contains("face1x")) {
          document.getElementById("event4").classList.remove('face1x');
          document.getElementById("event4").classList.add('face1');
          document.getElementById("event4x").classList.remove('face5x');
          document.getElementById("event4x").classList.add('face5');
        }
      });