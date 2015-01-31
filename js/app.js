//var app = angular.module('appName', []);

var app = angular.module('chatroom', []);

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});
