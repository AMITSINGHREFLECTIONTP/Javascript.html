$(document).ready(function() {
    $('button').click(function() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users ',
            success: function (output) {

                var detail = '';
                for(var r = 0; r < output.length; r++){
                    detail += '<tr><td class="css">'+output[r].id+'</td><td class="css">'+output[r].username+'</td><td class="css">'+output[r].id+'</td><td class="css">'+output[r].address.street+'</td><td class="css">'+output[r].address.geo.lng+'</td></tr>'

                }
                $('.ajaxs').html(detail);
                

            }
        })
    })
})