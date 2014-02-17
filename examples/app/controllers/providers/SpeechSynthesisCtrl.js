angular.module('digitalbs.examples.speechSynthesis', [])
    .controller('speechCtrl', ['$scope', 'speech', function ($scope, speech) {
        $scope.submitEntry = function () {
            var config = {
                voiceIndex: 9,
                rate: 2,
                pitch: 10
            }

            if(window.speechSynthesis) {
                speech.sayText($scope.msg, config);
            } else {
                $scope.support = 'Speech not Supported in this browser';
            }

        }
    }]);