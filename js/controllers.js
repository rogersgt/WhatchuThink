(function() {
  angular
    .module('blog')
    .controller('MainController', function($scope, Questions) {

      function getAllQuestions() {
        Questions.getThreads().success(function(data) {
          $scope.allQuestions = data;
        });
      }
      getAllQuestions();

      $scope.getQuestion = function(item) {
        Questions.startConversation(item).then(function() {
          getAllQuestions();
          angular.element(document).find('input').val("");
        });
      }

      $scope.delete = function(obj) {
        Questions.removeThis(obj);
      }

      $scope.toResponses = function(thread) {
        event.preventDefault();
        var id = thread._id;
        window.location.hash = 'conversation';
      }
    });

})();
