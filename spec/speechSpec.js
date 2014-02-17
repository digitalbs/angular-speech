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
        speech.sayText('This is text spoken');
        speechSynthesisMock.speak();
        expect(speechSynthesisMock.speak).toHaveBeenCalled();
    });
});
