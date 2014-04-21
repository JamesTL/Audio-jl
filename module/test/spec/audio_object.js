/**
 * Created by jameslove on 24/02/2014.
 */
// Load the validation code and describe tests.
    define(
    [
        "model/audio_object"
    ],
    function( AudioObject ){




        // Describe the test suite for this module.
        describe(
            "The AudioObjet module provides instantiation and core functionality for an audiocontext",
            function(){


                // Create our test module.
                var myAudioObject = new AudioObject();
                //replace with tests approp

                 it( "Should Create audio context when called",
                     function(){


                     });
              /*   it("string_length_match() - if str.length == len return true ,else false",
                    function(){
                        expect( myValidator.string_length_match("four", 4)).toBe(true);
                        expect( myValidator.string_length_match("flour", 5)).toBe(true);
                        expect( myValidator.string_length_match("flourmill", 35)).not.toBe(true);
                        expect( myValidator.string_length_match("flourmill", 349)).toBe(false);
                        //empty string
                        expect( myValidator.string_length_match("", 0)).toBe(true);
                        //will matchwhitespace as a characters
                        expect( myValidator.string_length_match(" ", 1)).toBe(true);
                    }

                );*/



 }
        );


    }
);