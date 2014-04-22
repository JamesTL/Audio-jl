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
                console.log(myAudioObject.return_Ctx(myAudioObject));
                //replace with tests approp

                 it( "It Should Create AudioContext when called",
                     function(){

                        var  isAudioContext  =  myAudioObject.context instanceof AudioContext;
                        expect(isAudioContext).toBe(true);
                     });

                  it("It should provide a mechanism to directly return the AudioContext",function(){

                        var isAudioCtx= myAudioObject.return_Ctx(myAudioObject) instanceof AudioContext;
                        expect(isAudioCtx).toBe(true);



                })
}
        );


    }
);