(function(){
    'use strict';
    
    angular.module('LunchCheck',[])
    .controller("LunchCheckController",LunchCheckController);
    LunchCheckController.$inject=['$scope'];

    function LunchCheckController($scope){
        $scope.LunchItems="";
        $scope.message="";
        $scope.checklunchitems=function(){
            var items=getCount($scope.LunchItems);
            if(items==0)
            {
                $scope.message=" Please Enter the Data First";
            }
            else if(items<=3)
            {
                $scope.message="Enjoy!";
            }
            else
            {
                $scope.message="Too Much!";
            }
        }
    }

    function getCount(string)
    {
        return string.split(",").filter(function(item){return item.trim().length!=0}).length;
    }
})();