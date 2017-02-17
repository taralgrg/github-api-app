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
