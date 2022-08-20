$(document).ready(function () {

    $('.nav, .nav1, .nav2').click(function () {
        
            $("image").addClass("block");
            $(this).removeClass("none");

        $('.image, .image1, .image2').hide()
        if ($(this).hasClass('nav1')) {
            $('.image1').slideToggle();
        }
        else if ($(this).hasClass('nav2')) {
            $('.image2').slideToggle();
        }

        else {
            $('.image').slideToggle();
        }
    }
    )

}

)


/*$(document).ready(function(){
    $("nav").click(function(){
      $("image").addClass("block");
    });
  });*/
 


/*$(document).ready(function(){
    $("button").click(function(){
      $("p:first").addClass("intro");
    });*/