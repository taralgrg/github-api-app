(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var apiKey = "6577eae8560bcb6250532cbc0e62b1d08e643dc4";


$(document).ready(function() {
  // console.log("hi");
  $('#submit').click(function(event) {
    event.preventDefault();
    var username = $('#body-entry').val();
    // console.log("click");
    $('#body-entry').val("");
    // console.log(username);
    $.get("https://api.github.com/users/"+username+'/repos'+"?access_token="+apiKey).then(function(response){
      console.log(response);
      var arr = response;
      $.each (arr,function (i,v) {
        $.each(v, function( key, value ) {
         $('.user-details').append("<p>"+key+":"+value+";</p>");
       });
      });


 }).fail(function(error){

      console.log(error);
    });
    // console.log("gets to the end");
  });
});

},{}]},{},[1]);
