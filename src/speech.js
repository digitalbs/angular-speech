'use strict';

/**
 * @type Factory
 * @module speech.factory
 * @class speech
 */
angular.module('digitalbs.speech', []).
    factory('speech', function () {

        function sayIt(text, config) {
            var msg = new SpeechSynthesisUtterance();
            var voices = window.speechSynthesis.getVoices();
            msg.voice = config && config.voiceIndex ? voices[config.voiceIndex] : voices[1];
            msg.volume = 1;
            msg.rate = config && config.rate ? config.rate : 1;
            msg.pitch = config && config.pitch ? config.pitch : 1;
            msg.text = text;

            speechSynthesis.speak(msg);

        }

        return {
            sayText: sayIt
        };
    });