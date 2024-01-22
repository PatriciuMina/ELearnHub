$(document).ready(function() {
    $('#chat-text').keypress(function (e) {
        console.log(e.which);
        if (e.which == 13) {
            $(this).closest('form').submit();
        }
    });
});