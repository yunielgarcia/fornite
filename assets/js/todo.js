(function(){

    "use strict";

    angular.module('app', ['ui.bootstrap'])
        .controller('appCtrl', function ($uibModal, $log) {

            var vm = this;

            vm.items = [
                {
                    name: 'Name?',
                    src: 'assets/media/images/01.jpg',
                    description: 'These virtuous knights descend upon the earthen plane to undo the evil plaguing it.',
                    selected: false

                },
                {
                    name: 'Name?',
                    src: 'assets/media/images/02.jpg',
                    description: 'These virtuous knights descend upon the earthen plane to undo the evil plaguing it.',
                    selected: false
                },
                {
                    name: 'Name?',
                    src: 'assets/media/images/03.jpg',
                    description: 'These virtuous knights descend upon the earthen plane to undo the evil plaguing it.',
                    selected: false
                },
                {
                    name: 'Name?',
                    src: 'assets/media/images/04.jpg',
                    description: 'These virtuous knights descend upon the earthen plane to undo the evil plaguing it.',
                    selected: false
                },
                {
                    name: 'Name?',
                    src: 'assets/media/images/05.jpg',
                    description: 'These virtuous knights descend upon the earthen plane to undo the evil plaguing it.',
                    selected: false
                },
                {
                    name: 'Name?',
                    src: 'assets/media/images/06.jpg',
                    description: 'These virtuous knights descend upon the earthen plane to undo the evil plaguing it.',
                    selected: false
                },
                {
                    name: 'Name?',
                    src: 'assets/media/images/07.jpg',
                    description: 'These virtuous knights descend upon the earthen plane to undo the evil plaguing it.',
                    selected: false
                },
                {
                    name: 'Name?',
                    src: 'assets/media/images/08.jpg',
                    description: 'These virtuous knights descend upon the earthen plane to undo the evil plaguing it.',
                    selected: false
                },
                {
                    name: 'Name?',
                    src: 'assets/media/images/09.jpg',
                    description: 'These virtuous knights descend upon the earthen plane to undo the evil plaguing it.',
                    selected: false
                },
                {
                    name: 'Name?',
                    src: 'assets/media/images/10.jpg',
                    description: 'These virtuous knights descend upon the earthen plane to undo the evil plaguing it.',
                    selected: false
                },
                {
                    name: 'Name?',
                    src: 'assets/media/images/11.jpg',
                    description: 'These virtuous knights descend upon the earthen plane to undo the evil plaguing it.',
                    selected: false
                },
                {
                    name: 'Name?',
                    src: 'assets/media/images/12.jpg',
                    description: 'These virtuous knights descend upon the earthen plane to undo the evil plaguing it.',
                    selected: false
                },
                {
                    name: 'Name?',
                    src: 'assets/media/images/13.jpg',
                    description: 'These virtuous knights descend upon the earthen plane to undo the evil plaguing it.',
                    selected: false
                },
                {
                    name: 'Name?',
                    src: 'assets/media/images/14.jpg',
                    description: 'These virtuous knights descend upon the earthen plane to undo the evil plaguing it.',
                    selected: false
                },
                {
                    name: 'Name?',
                    src: 'assets/media/images/15.jpg',
                    description: 'These virtuous knights descend upon the earthen plane to undo the evil plaguing it.',
                    selected: false
                }
            ]

            vm.open = function (item_fig) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'myModalContent.html',
                    controller: 'ModalInstanceCtrl',
                    controllerAs: 'vm',
                    size: 'lg',
                    resolve: {
                        item_fig: function () {
                            return item_fig;
                        }
                    }
                });

                modalInstance.result.then(function (selectedItem) {
                    // $ctrl.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };

            vm.openRedeem = function () {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'redeemModal.html',
                    controller: 'RedeemModalInstanceCtrl',
                    controllerAs: 'vm',
                    size: 'md',
                });

                modalInstance.result.then(function (selectedItem) {
                    // $ctrl.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };


        })
        .controller('ModalInstanceCtrl', function ($uibModalInstance, item_fig) {
            var vm = this;
            vm.fig = item_fig;

            vm.ok = function () {
                // $uibModalInstance.close(vm.selected.item);
                $uibModalInstance.close();
            };

            vm.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        })
        .controller('RedeemModalInstanceCtrl', function ($uibModalInstance) {
            var vm = this;

            vm.ok = function () {
                $uibModalInstance.close();
            };

            vm.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        })
    ;
})();

