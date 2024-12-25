angular.module('LunchCheckApp', [])
    .controller('LunchCheckController', ['$scope', function($scope) {
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.messageStyle = "";

        $scope.checkLunch = function() {
            if (!$scope.lunchItems.trim()) {
                $scope.message = "Please enter data first";
                $scope.messageStyle = "text-danger"; // Red text for an error
                return;
            }

            const items = $scope.lunchItems.split(',').map(item => item.trim()).filter(item => item !== '');
            const itemCount = items.length;

            if (itemCount === 0) {
                $scope.message = "Please enter data first";
                $scope.messageStyle = "text-danger";
            } else if (itemCount <= 3) {
                $scope.message = "Enjoy!";
                $scope.messageStyle = "text-success"; // Green text for success
            } else {
                $scope.message = "Too much!";
                $scope.messageStyle = "text-warning"; // Orange text for warning
            }
        };
    }]);
