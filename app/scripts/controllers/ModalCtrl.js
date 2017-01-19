(function() {
    function ModalCtrl($scope, $uibModalInstance){
        $scope.text = "";

        $scope.ok = function(){
            $uibModalInstance.close($scope.text);
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    }

    angular.module('blocChat',['ui.bootstrap'])
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', ModalCtrl])
})();
