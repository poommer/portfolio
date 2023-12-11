$(document).ready(function(){ 
    $("#Btn_menu").click(function(){
        $('nav').addClass('nav-active')
        $('#Btn_menu').hide()
        $('#Btn_menuClose').show()
    })

    $("#Btn_menuClose").click(function(){
        $('nav').removeClass('nav-active')
        $('#Btn_menu').show()
        $('#Btn_menuClose').hide()
    })


    $('#BtnTobe').click(function(){
        $('.ToBeIT').show()
        
    })

    $('#BtnComSkill').click(function(){
        $('.ComSkill').show()
    })

    $('#BtnAI').click(function(){
        $('.AI').show()
    })

$('#BtnData').click(function(){
        $('.Data').show()
    })

$('#BtnMeetingIBMer').click(function(){
        $('.MeetingIBMer').show()
    })

    $('#BtnIBM').click(function(){
        $('.IBM').show()
    })



    $('.pop-close').click(function(){
         $('.ToBeIT').hide()
       $('.ComSkill').hide()
         $('.AI').hide()
         $('.Data').hide()
         $('.MeetingIBMer').hide()
         $('.IBM').hide()
    })




    $('#prev').click(function(){
        
    })
})


// -------------------

var slideIndex = 1;
ShowImg(slideIndex);

function plusSlides(n) {
    ShowImg(slideIndex += n);
}

// function currentSlide(n) {
//     ShowImg(slideIndex = n);
// }

function ShowImg(n) {
    var i;
    var slides = document.getElementsByClassName("Act-img");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}