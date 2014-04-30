/**
 * Created by jameslove on 30/04/2014.
 * * test for law_audioCOntext AMD- which will create  an audioContext
 */
// Load the validation code and describe tests.
define(
    [
        "model/law_audioContext",
        "model/law_node"
    ],
    function(Law_audioContext,Law_Node){

        // Describe the test suite for this module.
        describe(
            "The Law_Node module provides instantiation and core functionality for an audio Node",
            function(){
                // Create our test module.
                var testLaw = new Law_audioContext();
                console.log(testLaw);
                //console.log(testLaw.return_Ctx(testLaw));
                //replace with tests approp
                    //test

                it( "It will create and return and object of type Law_Node",
                    function(){

                        var  myLawNode  = new Law_Node();
                        var isLawNode = myLawNode instanceof Law_Node;
                        expect(isLawNode).toBe(true);
                    });
                  //

               //  it("It must be passed an audioContext to function",
                 //function(){

                   //  var noAudioContext= ;
                   //  expect().toBe(true);

                // };


                //it( "It will create a source for the Node using the createBufferSource() function of an auudioCOntent",
                   // function(){
                      //  var  isAudioContext  =  testLaw.context instanceof AudioContext;
                      //  expect(isAudioContext).toBe(true);
                  //  });
            }
        );
    }
);