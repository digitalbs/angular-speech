angular.module('digitalbs.examples.speechSynthesis', [])
    .controller('speechCtrl', ['$scope', 'speech', function ($scope, speech) {
        $scope.voices = [
            {
                name: "US English Accent"
            },
            {
                name: "UK English Male Accent"
            },
            {
                name: "UK English Female Accent"
            },
            {
                name: "Spain Accent"
            },
            {
                name: "French Accent"
            },
            {
                name: "Italian Accent"
            },
            {
                name: "German Accent"
            },
            {
                name: "Japanese Accent"
            },
            {
                name: "Korean Accent"
            },
            {
                name: "Chinese Accent"
            },
            {
                name: "Alex"
            },
            {
                name: "Agnes"
            },
            {
                name: "Albert"
            },
            {
                name: "Bad News"
            },
            {
                name: "Bahh"
            },
            {
                name: "Bells"
            },
            {
                name: "Boing"
            },
            {
                name: "Bruce"
            },
            {
                name: "Bubbles"
            },
            {
                name: "Cellos"
            },
            {
                name: "Deranged"
            },
            {
                name: "Fred"
            },
            {
                name: "Good News"
            },
            {
                name: "Hysterical"
            },
            {
                name: "Junior"
            },
            {
                name: "Kathy"
            },
            {
                name: "Pipe Organ"
            },
            {
                name: "Princess"
            },
            {
                name: "Ralph"
            },
            {
                name: "Trinoids"
            },
            {
                name: "Vicki"
            },
            {
                name: "Victoria"
            },
            {
                name: "Whisper"
            },
            {
                name: "Zarvox"
            }
        ];

        $scope.submitEntry = function () {

            var voiceIdx = $scope.voices.indexOf($scope.optionSelected),
                config = {
                    voiceIndex: voiceIdx
                }

            if(window.speechSynthesis) {
                speech.sayText($scope.msg, config);
            } else {
                $scope.support = 'The speech API is not Supported in this browser. You entered in: ' + $scope.msg;
            }

        }
    }]);