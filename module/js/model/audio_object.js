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

            is_empty_string : function(str){

                 return str.length === 0 ;

            },

            test_regex : function(str,reg){

                 return  reg.test(str);

            },

            string_length_match: function(str, len){

                 return str.length === len ;
            }

       };



        // Return the module constructor.
        return(AudioObject)

        // -------------------------------------------------- //


    }
);