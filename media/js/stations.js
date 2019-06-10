function Station(id, title) {
    this.id = id;
    this.title = title;
    var option = document.createElement('option');
    option.value = id;
    option.text = title;
    return option;
}
$(document).ready(function () {
    $("#l-route").css('display', 'none');
    $("#form_from").on('change', function () {
        //completeTo(this.value, this.text)
    });
    $("#form_to").on('change', function () {
        var id = getRouteId($("#form_from").value, this.value);
        $("#route").attr('data', 'media/scheme/route_' + id + '.svg');
        $("#l-route").show();
        var curPos=$(document).scrollTop();
        var height=$("body").height();
        var scrollTime=(height-curPos)/1.73;
        $("body,html").animate({"scrollTop":height},scrollTime);
    });
});
function completeTo(val, text) {
    $("#form_to").options.add(Station(val, text));
}
function getRouteId(from, to) {
    return '1';
}