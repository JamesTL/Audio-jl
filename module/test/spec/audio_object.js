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
            "The AudioObjet module provides instantiation and core functionality for an audioContext",
            function(){


                // Create our test module.
                var myAudioObject = new AudioObject();
                console.log(myAudioObject);
                //replace with tests approp

                 it( "It Should Create AudioContext when called",
                     function(){

                        var  isAudioContext  =  myAudioObject.context instanceof AudioContext;
                        expect(isAudioContext).toBe(true);
                     });
}
        );


    }
);