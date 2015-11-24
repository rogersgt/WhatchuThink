(function () {
  "use strict";

  angular
    .module('blog')
    .factory('Questions', function($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/whatchuthinkin';

      var startConversation = function (newThread) {
        return $http.post(url, newThread);
      };

      var getThreads = function () {
        return $http.get(url);
      };

      var removeThis = function(thread) {
        return $http.delete(url+"/"+thread._id);
      }

      return {
        startConversation: startConversation,
        getThreads: getThreads
      };

    });



})();
