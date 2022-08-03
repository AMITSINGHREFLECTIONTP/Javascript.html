$(document).ready(function()
{
    $('.last').keyup(function(){
        var text = $(this).val();

        localStorage.setItem('local-storage',text);
        $('#local-storage').html=localStorage.getItem('local-storage');        
        $('.name-one').html(text);
    }
    );


    $('.last').click(function()
    {
        $(this).animate({'width':'270px'},4000);
        $(this).css({'background-color':'pink','border-radius':'100px',"height":"30px"});
        

    });
    $('.last').blur(function()
    {
        $(this).animate({'width':'150px'},0);
        $(this).css({'background-color':'orange','border-radius':'0px',"height":"20px",});    });
})


