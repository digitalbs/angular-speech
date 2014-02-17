angular.module('digitalbs.examples.speechSynthesis', [])
    .controller('speechCtrl', ['$scope', 'speech', function ($scope, speech) {
        $scope.submitEntry = function () {

            var config = {
                voiceIndex: 1,
                rate: 2,
                pitch: 10
            }

            if(window.speechSynthesis) {
                speech.sayText($scope.msg, config);
            } else {
                $scope.support = 'The speech API is not Supported in this browser. You entered in: ' + $scope.msg;
            }

        }
    }]);