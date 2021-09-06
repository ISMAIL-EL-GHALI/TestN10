var btn = document.getElementById('btn') ;
    
btn.onclick = function(){
    namee = document.getElementById('name').value ,
    email = document.getElementById('email').value,
    cell = document.getElementById('tele').value ,
     meg = document.getElementById('mesg').value;
    if(namee !="" && email !="" && cell !="" && meg !=""){
        alert("Message est envoyer avec succes ");
    }
}

$(function () {
    'use strict';
    //I will get height of element window , upperHeader and navBar

  

    var WinH = $(window).height(), Upper = $(".upper-header").innerHeight(), navbar = $(".navbar").innerHeight();
    $(".slider  ,.carousel-item").innerHeight(WinH - (Upper + navbar));

    //will add  opacity of element not select in section Features work
    //first step iw ill get element click
    $(".feature-work li").on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var data = $(this).data("class");
        if (data == "ALL") {
            console.log(data);
            $(".feature-work .row img").parent().css("opacity", 1);

        } else {
            $(".feature-work .row img").parent().css("opacity", 0.3);
            $(".feature-work .row img"+data).parent().css("opacity", 1);

        }
    });

    $('.navbar li a').click(function(e){
        e.preventDefault();
        $('html , body').animate({

            scrollTop:$('#' +$(this).data('scroll')).offset().top

        },1050)
    });

    $('.en a').click(function(e){
        e.preventDefault();
        $('html , body').animate({

            scrollTop:$('#' +$(this).data('scroll')).offset().top

        },1050)
    });
});


$(document).ready(function(){
    'use strict';
$(window).scroll(function(){
    if($(this).scrollTop() > 40)
    {
         $('#tpbtn').fadeIn();
    }
    else
    {
        $('#tpbtn').fadeOut();
    }
});

$("#tpbtn").on('click',function(){
    $('html,body').animate({scrollTop: 0},800);
});

$(".nav-link").removeClass("active");
    $(".nav-link").click(function (e) {
       // e.preventDefault();
        $(".nav-link").removeClass("active");
        $(this).addClass("active");

    });

});


/*Spenner */
$(window).on("load",function(){
    'use strict'
    $("body").css("overflow","auto");
    $(".loading-screen").fadeOut(1000 , function(){
      $(this).remove();
    });
  });


  







