function age(a) {
    var b = new Date,
        a = new Date(a),
        c = b.getFullYear() - a.getFullYear();
    return b.setFullYear(1972) >= a.setFullYear(1972) ? c : c - 1
}
var skills = function () {
    $(".skill-item").each(function () {
        var newWidth = $(this).parent().width() * $(this).data("percent"); 
        $(this).width(0);
        $(this).animate({width: newWidth}, 1e3);
    })
};
$(document).ready(skills);
var resize;
window.onresize = function () {
    clearTimeout(resize), resize = setTimeout(function () {
        skills();
    }, 100)
}, $(".text-header sup").empty().html("  " + age("Aug 31, 1989") + "yo");