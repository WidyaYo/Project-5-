$('#tabs li a:not(:first)').addClass('inactive');
    $('.tab-content-custom').hide();
    $('.tab-content-custom:first').show();

    $('#tabs li a').click(function(){
        var t = $(this).attr('id');
        if($(this).hasClass('inactive')){
            $('#tabs li a').addClass('inactive');
            $(this).removeClass('inactive');

            $('.tab-content-custom').hide();
            $('#' + t + 'content').fadeIn('slow');
        }
    })