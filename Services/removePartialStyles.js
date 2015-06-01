angular.module('testApp', []).
    factory('removePartialStyles', function () {
        return function () {
            while (angular.element(document.querySelector('.partial')).length) {
                angular.element(document.querySelector('.partial')).remove();
            }
        };
    });
