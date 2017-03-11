const app = angular.module('app', []);

app.controller('NewsListController', function($scope, $location, AppService) {
  $scope.newsList;

  $scope.init = function () {
    $scope.getNews();
  }

  $scope.upVote = function (data) {
    ++data.votes;
  }

  $scope.getNews = function () {
    AppService.getNews().then((data) => {
      $scope.newsList = data.data;
      console.log($scope.newsList);
    })

  }

  $scope.submitNews = function (url, by, title, date, text) {
    let news = {
      url: url,
      by: by,
      title: title,
      date: date,
      text: text
    }

    AppService.postNews(news);
    // run the post function
  }


});

app.service('AppService', function($http){
  //this = Object.create();
  this.getNews = function (cb) {
    return $http ({
      method: 'GET',
      url: '/api/news',
    })

  }

  this.postNews = function (news){
    return $http ({
      method: 'POST',
      url: '/api/news',
      data: news
    }).then((res) => {
      console.log('successfully posted');
      return res;
    })
  }
});



