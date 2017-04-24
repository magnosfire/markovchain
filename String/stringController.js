
(function () {

    'use strict';

    angular
        .module('markovApp')
        .controller('markovController', markovController);

    markovController.$inject = ['$scope','stringService'];

    function markovController ($scope,stringService) {
        var vm = this;

        vm.clear = clearForm;
        vm.markovFunc = functionString;


        function functionString() {

            if(vm.markovString) {

                let arr = vm.markovString.split(' ').join('').toLowerCase();
                let total = vm.markovString.split(' ').join('').length;
                let countVowelFollowedByVowel = stringService.stringAnalyze(arr);

                vm.vowelFollowedByVowel = stringService.percentFollowedByVowel(countVowelFollowedByVowel, total);
                vm.vowelFollowedByConsonant = stringService.percentFollowedByConsonant(countVowelFollowedByVowel, total);

            }
            else{

            }

        };

        function clearForm() {

            vm.vowelFollowedByVowel = null;
            vm.vowelFollowedByConsonant = null;
            vm.markovString = "";

        };

    };

})();
