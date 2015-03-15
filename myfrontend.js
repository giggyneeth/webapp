//var greetingMessage= "Hello Neil";
//var firstName= prompt ("What's your name in a non creepy way?");
//alert (greetingMessage + firstName) ;


jQuery("#greeting-form").on("submit", function (eventDetails){
    var emailAddress=this.emailAddress.value;
    var firstName = this.fullName.value;
    var greeting="Don't be scared we only want to offer food ";
    jQuery("#greeting-form").hide();
    jQuery("#greeting").append("<p>"+greeting+ firstName + ", we've sent a confirmation to "+ emailAddress + "</p>");
      //  alert (greetingMessage);
    //eventDetails.preventDefault();

});