$(document).ready(function() {
    var lastCallMs = 0;
    $('#nav_menu_trigger').click(function() {
        $('.nav_menu_item').toggleClass('nav_menu_item_visible');
        $('.nav_menu_lang').toggleClass('nav_menu_item_visible');
    });
    $('.nav_menu_item').click(function(event) {
        event.preventDefault();
        $('.nav_menu_item').toggleClass('nav_menu_item_visible');
        $('.nav_menu_lang').toggleClass('nav_menu_item_visible');
        $('html, body').scrollTop($($(event.target).attr('href')).offset().top - 20);
    });
    $(window).scroll(function() {
        var now = new Date().getTime();
        if (now - lastCallMs > 40) { // 25fps
            lastCallMs = now;
            if ($(window).scrollTop() > 260)
                 $('#nav_home_trigger').css({'display': 'block'});
            else $('#nav_home_trigger').css({'display': 'none'});
        }
    });
});

