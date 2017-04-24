(function () {

    angular
        .module('markovApp')
        .service('stringService', stringService);

    function stringService() {

        this.percentFollowedByConsonant = function percentFollowedByConsonant(countVowelFollowedByVowel, total) {

            let percentVowelFollowedByVowel = this.percentFollowedByVowel(countVowelFollowedByVowel, total);

            return (100.00 - percentVowelFollowedByVowel);

        };

        this.percentFollowedByVowel = function percentFollowedByVowel(countVowelFollowedByVowel, total) {

            return (countVowelFollowedByVowel * 100/ total).toFixed(2);

        };

        this.stringAnalyze = function percentFollowedByVowel(arr) {

            let countVowelFollowedByVowel = 0;

            angular.forEach(arr, function (value, key) {

                if(value == "a" || value == "e" || value == "i" || value == "o" || value == "u") {

                    if(arr[key+1] == "a" || arr[key+1] == "e" || arr[key+1] == "i" || arr[key+1] == "o" || arr[key+1] == "u") {

                        countVowelFollowedByVowel++;

                    }

                }

            });

            return countVowelFollowedByVowel;

        };

    };

})();