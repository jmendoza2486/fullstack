var app = angular.module('aplicacion',[]);

app.controller('PrincipalCtrl',function($scope,$http){
        //$http.get("https://worldcup.sfg.io/matches/today")
        $http.get("data/data.json")
        .then(function(response){
            $scope.ejemplo2 = response.data;
            $scope.equipos = [{local:"LOCAL",visitante:"VISITANTE"}];
            console.log($scope.ejemplo2)
            for (var i = 0; i < $scope.ejemplo2.length; i++) {
                $scope.equipos.push({local : $scope.ejemplo2[i].home_team_country, visitante : $scope.ejemplo2[i].away_team_country});
            }
            $scope.equipos2 = [];
            $scope.flags = [];
            for (var i = 0 ; i <= $scope.ejemplo2.length; i++) {
                $scope.equipos2.push($scope.ejemplo2[i].home_team_country);
                $scope.equipos2.push($scope.ejemplo2[i].away_team_country);
                $scope.flags.push("http://www.countryflags.io/"+$scope.ejemplo2[i].home_flag+"/flat/64.png");
                $scope.flags.push("http://www.countryflags.io/"+$scope.ejemplo2[i].away_flag+"/flat/64.png");
            }
        })
        $scope.ejemplo = "Hola JSON";        
            
    }
)
