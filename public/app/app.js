angular.module("app", []);

angular.module('app').controller('testCtrl', function($scope){
    $scope.jobs = [{
        title: 'Sales Person',
        description: 'You will fight dragons'
    },
    {
        title: 'Software engineer',
        description: 'You will use the keyboard'
    }
    ];
})