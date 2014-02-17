'use strict';

/**
 * @type Factory
 * @module speech.factory
 * @class speech
 */
angular.module('digitalbs.speech', []).
    factory('speech', function () {

        if(window.speechSynthesis) {
            var msg = new SpeechSynthesisUtterance();

            //calling get voices method first scaffolds it for
            //use in say method
            window.speechSynthesis.getVoices();
        }

        function sayIt(text, config) {
            var voices = window.speechSynthesis.getVoices();
            //choose voice. Fallback to default
            msg.voice = config && config.voiceIndex ? voices[config.voiceIndex] : voices[2];
            msg.volume = config && config.volume ? config.volume : 1;
            msg.rate = config && config.rate ? config.rate : 1;
            msg.pitch = config && config.pitch ? config.pitch : 1;

            //message for speech
            msg.text = text;

            speechSynthesis.speak(msg);
        }


        return {
            sayText: sayIt
        };
    });