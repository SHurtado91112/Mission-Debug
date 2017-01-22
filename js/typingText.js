
$(document).ready(
     function() {

      $("#appName").typed({

        strings: ["Name of App Here"],
        typeSpeed: 60,
     //    startDelay: 2000,
        showCursor: false,
          });

          $("#questionText").typed({

            strings: ["Question #x"],
            typeSpeed: 60,
         //    startDelay: 2000,
            showCursor: false,
              });



});
