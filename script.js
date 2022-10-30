$(document).ready(function(){
    $(".btn-show").click(function(){
    $(".text").show();
   });

   $(".btn-toggle").click(function(){
    $(".menu-content").toggle();
    });

    $(".form-input").change(function(){
        $(".alert").show();
    });

    $(".form-blur").change(function(){
        $(".alert-blur").show();
    });
   
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

    $('.clickToSmall').click(function (){
        $('.box').animate({
            marginLeft: "300px",
            height: "100px"
           });
    })

    $('.clickToBig').click(function (){
        $('.box').animate({
            marginLeft: "0x",
            height: "300px"
           });
    })

    $('.fadeTo').click(function (){
        $('.boxFade').fadeOut(1000)
     })

     $('.slideToggle').click(function (){
        $('.boxToggle').slideToggle(1000)
     })
});