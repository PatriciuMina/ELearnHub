$(document).ready(function () {
    var i = 0;
    let images_array = [
        '../../assets/books.jpg',
        '../../assets/books1.jpg',
        '../../assets/chapter_background.jpg',
        '../../assets/home-bg.jpg'
    ]

    function changeBackground() {
        i = (i + 1) % images_array.length;

        $('#image_transition').fadeIn("slow", "linear", function () {
            $('#image_transition').css({
                "background-image": "url(" + images_array[i] + ")"
            });
            $('#image_transition').fadeIn("slow", "linear");
        });

        setTimeout(changeBackground, 3000);
    }

    $(document).ready(function () {
        setTimeout(changeBackground, 3000);
    });
});




