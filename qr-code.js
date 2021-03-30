// JavaScript Document
var newsIndex = 1;
function NewsRotator() {
  $(".news").hide();
  $(".news" + newsIndex).show();
  
  var newsCount = 5;
  newsIndex++;
  if(newsIndex >= newsCount) {
    newsIndex = 1;
  }
}

$(document).ready(function() {
  NewsRotator();
  setInterval(NewsRotator, 28800000);
});