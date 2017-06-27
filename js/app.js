var app = angular.module('quadrados', []);

app.controller('QuadradosController', function($scope){
    var cores = ['#000000', '#2071c6', '#20c6c1', '#00fff7', '#00fff7'];
    $scope.quadrados = [];

    for(var i = 0; i < 920; i++){
      $scope.quadrados[i] = {cor: cores[0]}
    }

    $scope.alterarCor = function(quadrado){
        var indice = cores.indexOf(quadrado.cor);

        indice++;

        if(indice == cores.length-1){
            indice = 0;
        }

        quadrado.cor = cores[indice];
    }
});
