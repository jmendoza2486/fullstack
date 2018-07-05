var app = angular.module('aplicacion',[]);

app.controller('PrincipalCtrl',function($scope,$http){
        $http.get("https://worldcup.sfg.io/matches/today")
        .then(function(response){
            $scope.ejemplo2 = response.data;
            $scope.equipos = [{local:"LOCAL",visitante:"VISITANTE"}];
            console.log($scope.equipos)
            for (var i = 0; i < $scope.ejemplo2.length; i++) {
                $scope.equipos.push({local : $scope.ejemplo2[i].home_team_country, visitante : $scope.ejemplo2[i].away_team_country});
            }
            $scope.equipos2 = [];
            for (var i = 0 ; i <= $scope.ejemplo2.length; i++) {
                $scope.equipos2.push($scope.ejemplo2[i].home_team_country);
                $scope.equipos2.push($scope.ejemplo2[i].away_team_country);
            }
        })
        $scope.ejemplo = "Hola JSON";        
            
    }
)
