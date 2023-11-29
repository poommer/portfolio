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
})