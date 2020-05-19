$(document).ready(function() {


    // Code Here
    $('#toggle, .closebtn').click(function() {
        $(this).toggleClass('active');
        $("body").toggleClass("overflow-hidden");
        $('#overlay').toggleClass('open');
    });
});