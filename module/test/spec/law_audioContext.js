/**
 * Created by jameslove on 24/02/2014.
 * * test for law_audioCOntext AMD- which will create  an audioContext
 */
// Load the validation code and describe tests.
    define(
    [
        "model/law_audioContext"
    ],
    function(Law_audioContext){

        // Describe the test suite for this module.
        describe(
            "The AudioObjet module provides instantiation and core functionality for an audioContext",
            function(){
                     // Create our test module.
                var testLaw = new Law_audioContext();
                console.log(testLaw);
               //console.log(testLaw.return_Ctx(testLaw));
                //replace with tests approp

                 it( "It  Creates AudioContext when instantiated",
                     function(){
                            var  isAudioContext  =  testLaw.context instanceof AudioContext;
                            expect(isAudioContext).toBe(true);
                     });
             }
        );
    }
);