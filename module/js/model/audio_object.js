// Define the module.
define(
    [
        /* Any dependencies? Leave empty if none */
    ],

    function(){
        'use strict';


        // Constructor

        function AudioObject(){
            //
            var contextClass = (window.AudioContext|| window.webkitAudioContext)

            if(contextClass){
                this.context = new contextClass();
            }
            else{

               return;
            }
         }

        // Define the class methods.
        AudioObject.prototype = {

            //directly return the AudioContext - it's AudioObject container.
            return_Ctx : function(ctx){

                 return ctx.context ;

            }

       };



        // Return the module constructor.
        return(AudioObject)

        // -------------------------------------------------- //


    }
);