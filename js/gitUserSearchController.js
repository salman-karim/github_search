githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var self = this;

  var searchResource = $resource('https://api.github.com/search/users');

  self.doSearch = function() {
    Search.query(self.searchTerm)
    .then(function(response) {
      self.searchResult = response.data;
    });
  };
}]);


  // self.doSearch = function() {
  //   self.searchResult = {
  //     "items": [
  //       {
  //         "login": "tansaku",
  //         "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
  //         "html_url": "https://github.com/tansaku"
  //       },
  //       {
  //         "login": "stephenlloyd",
  //         "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
  //         "html_url": "https://github.com/stephenlloyd"
  //       }
  //     ]
  //   };
