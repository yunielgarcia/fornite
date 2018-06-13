angular.module('app', ['ui.bootstrap'])
    .controller('appCtrl', function ($uibModal, $log) {

        var vm = this;

        vm.items = [
            {
                name: 'Name?',
                src: 'assets/media/images/01.jpg',
                selected: false

            },
            {
                name: 'Name?',
                src: 'assets/media/images/02.jpg',
                selected: false
            },
            {
                name: 'Name?',
                src: 'assets/media/images/03.jpg',
                selected: false
            },
            {
                name: 'Name?',
                src: 'assets/media/images/04.jpg',
                selected: false
            },
            {
                name: 'Name?',
                src: 'assets/media/images/05.jpg',
                selected: false
            },
            {
                name: 'Name?',
                src: 'assets/media/images/06.jpg',
                selected: false
            },
            {
                name: 'Name?',
                src: 'assets/media/images/07.jpg',
                selected: false
            },
            {
                name: 'Name?',
                src: 'assets/media/images/08.jpg',
                selected: false
            },
            {
                name: 'Name?',
                src: 'assets/media/images/09.jpg',
                selected: false
            },
            {
                name: 'Name?',
                src: 'assets/media/images/10.jpg',
                selected: false
            },
            {
                name: 'Name?',
                src: 'assets/media/images/11.jpg',
                selected: false
            },
            {
                name: 'Name?',
                src: 'assets/media/images/12.jpg',
                selected: false
            },
            {
                name: 'Name?',
                src: 'assets/media/images/13.jpg',
                selected: false
            },
            {
                name: 'Name?',
                src: 'assets/media/images/14.jpg',
                selected: false
            },
            {
                name: 'Name?',
                src: 'assets/media/images/15.jpg',
                selected: false
            }
        ]

        vm.open = function (size) {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'vm',
                size: size,
                resolve: {
                    items: function () {
                        // return $ctrl.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                // $ctrl.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };


    })
    .controller('ModalInstanceCtrl', function ($uibModalInstance) {
        var vm = this;
        // vm.items = items;
        // vm.selected = {
        //     item: vm.items[0]
        // };

        vm.ok = function () {
            // $uibModalInstance.close(vm.selected.item);
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    })
;