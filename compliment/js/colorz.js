var safeColors = ['00','33','66','99','cc',];
var rand = function() {
    return Math.floor(Math.random()*5);
};
var randomColor = function() {
    var r = safeColors[rand()];
    var g = safeColors[rand()];
    var b = safeColors[rand()];
    return "#"+r+g+b;
};

$(document).ready(function() {
    $('#theButton').click(function() {
        $('.color').each(function() {
            $(this).css('background',randomColor());
        });
    });
});
