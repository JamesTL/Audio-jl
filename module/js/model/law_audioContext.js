// Law_audioContextn
// Module creates an audioContext
//refrence context--> Law_audioContext.context will reference the audioContext
define(
    [],
function(){

        'use strict';

        function Law_audioContext(){

            //auiodContext prefix fix
            var contextClass = (window.AudioContext|| window.webkitAudioContext);

            if(contextClass !=="undefined"){
                this.context = new contextClass();
            }
            //may need som error handling here;
         }

          // Return the module constructor.
          return(Law_audioContext);
        }
);