/**
 * Created by Umer Hassan on 8/22/2015.
 */


var myApp = angular.module('myApp', []);
myApp.controller('myController', ['$scope', '$http', function ($scope, $http) {
    $http.get('js/data.json').success(function (data) {
        $scope.artists = data;
        $scope.artistOrder = 'name';
    });
}]);