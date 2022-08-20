$(document).ready(function () {

    $('.cycle, .bike, .thar, .train').click(function () {

        $('.pic, .pic1, .pic2, .pic3').hide()
        if ($(this).hasClass('bike')) {
            $('.pic1').slideToggle();
        }
        else if ($(this).hasClass('thar')) {
            $('.pic2').slideToggle();
        }
        else if ($(this).hasClass('train')) {
            $('.pic3').slideToggle();
        }
        else {
            $('.pic').slideToggle();
        }
    }
    )

}

)