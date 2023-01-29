// Menu Bar
// We used Jquery for this
$('#menu-btn').click(function() {
    $('nav .navigation ul').addClass('active')
});
$('#menu-close').click(function() {
    $('nav .navigation ul').removeClass('active')
});