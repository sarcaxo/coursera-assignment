var app = angular.module("app", []);

app.controller ( "MainController" , function($scope){
    $scope.message = "";
    $scope.inputString = "";
    $scope.clickfunc = function(){
        var input = $scope.inputString.split(',');
        var count = 0;
        for (var i = 0 ; i< input.length ; i++){
            if(input[i] == ""  || input[i] == " ")
                continue;
            else
                count++
        }
        
        
        if (count == 0)
            $scope.message = "Please enter the data first!";
        else
            if(count <=3 )
            $scope.message = "Enjoy!";
        else
            $scope.message = "Too much";
        
    }
});


