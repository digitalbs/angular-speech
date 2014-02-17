var speech,
    scope,
    speechSynthesisUtteranceMock = jasmine.createSpy(),
    speechSynthesisMock = {
        speak: jasmine.createSpy()
    };


beforeEach(module(function ($provide) {
    $provide.value('SpeechSynthesisUtterance', speechSynthesisUtteranceMock);
    $provide.value('speechSynthesis', speechSynthesisMock);
}));

beforeEach(function () {
    module('digitalbs.speech');

    inject(function (_speech_) {
        speech = _speech_;
    });
});

describe('speech: synthesis', function () {
    it('should use the speech API to say the text passed into it', function () {
        speech.sayText('This is a test');
        speechSynthesisMock.speak();
        expect(speechSynthesisMock.speak).toHaveBeenCalled();
    });

    it('should use the config passed in to alter the speech API to say the text passed into it', function () {
        var config = {
            voiceIndex: 2,
            volume: 5,
            rate: 1,
            pitch:1
        }
        speech.sayText('This is a test passing in a config', config);
        speechSynthesisMock.speak();
        expect(speechSynthesisMock.speak).toHaveBeenCalled();
    });

});
