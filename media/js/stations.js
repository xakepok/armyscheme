function Station(id, title) {
    this.id = id;
    this.title = title;
    var option = document.createElement('option');
    option.value = id;
    option.text = title;
    return option;
}

var Stations = {
    0: new Station(0, 'Куда'),
    1: new Station(1, 'Москва (Белорусский вокзал)'),
    2: new Station(2, 'Москва (Киевский вокзал)'),
    3: new Station(3, 'Ст. Голицыно'),
    4: new Station(4, 'Ст. Селятино'),
    5: new Station(5, 'Ст. Кубинка'),
    6: new Station(6, 'Парадная Площадка'),
    7: new Station(7, 'Аэродром Кубинка'),
    8: new Station(8, 'Входная группа D (№3)'),
    9: new Station(9, 'Музейный комплекс / площадка №1 / ВПК'),
    10: new Station(10, 'Броневагон'),
    11: new Station(11, 'Центр военно-тактических игр'),
    12: new Station(12, 'Юнармия / Партизанская деревня / Конно-спортивный комплекс'),
    13: new Station(13, 'Стрелковый клуб Калашников'),
    14: new Station(14, 'Многофункциональный огневой центр'),
    15: new Station(15, 'Входная группа B'),
    16: new Station(16, 'Входная группа C'),
    17: new Station(17, 'Входная группа D (№2)'),
    18: new Station(18, 'Парковка сектор O'),
    19: new Station(19, 'Парковка сектор A'),
    20: new Station(20, 'Парковка сектор K'),
    21: new Station(21, 'Парковка сектор F'),
    22: new Station(22, 'Парковка сектор C'),
    23: new Station(23, 'Полигон Алабино'),
    24: new Station(24, 'Парковка сектор J'),
    25: new Station(25, 'Парковка сектор E'),
};

var Assets = {
    '0': [Stations[0]],
    '1': [Stations[0], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[23]],
    '2': [Stations[0], Stations[7], Stations[8], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[23]],
    '3': [Stations[0], Stations[6], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[23]],
    '4': [Stations[0], Stations[6], Stations[7], Stations[8], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[23]],
    '5': [Stations[0], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[23]],
    '6': [Stations[0], Stations[2], Stations[4], Stations[7], Stations[8], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[24], Stations[25], Stations[23]],
    '7': [Stations[0], Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[18], Stations[23]],
    '8': [Stations[0], Stations[2], Stations[4], Stations[6], Stations[23]],
    '9': [Stations[0], Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[7], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[24], Stations[25], Stations[23]],
    '10': [Stations[0], Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[7], Stations[9], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[24], Stations[25], Stations[23]],
    '11': [Stations[0], Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[7], Stations[9], Stations[10], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[24], Stations[25], Stations[23]],
    '12': [Stations[0], Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[7], Stations[9], Stations[10], Stations[11], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[24], Stations[25], Stations[23]],
    '13': [Stations[0], Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[14], Stations[15], Stations[16], Stations[17], Stations[24], Stations[25], Stations[23]],
    '14': [Stations[0], Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[15], Stations[16], Stations[17], Stations[24], Stations[25], Stations[23]],
    '15': [Stations[0], Stations[1], Stations[3], Stations[5], Stations[7], Stations[9], Stations[18], Stations[24], Stations[25]],
    '16': [Stations[0], Stations[1], Stations[3], Stations[5], Stations[7], Stations[9], Stations[18], Stations[24], Stations[25]],
    '17': [Stations[0], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14]],
    '18': [Stations[0], Stations[1], Stations[3], Stations[5], Stations[7]],
    '19': [Stations[0], Stations[6], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[23]],
    '20': [Stations[0], Stations[6], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[23]],
    '21': [Stations[0], Stations[6], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[23]],
    '22': [Stations[0], Stations[6], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[23]],
    '23': [Stations[0], Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[7], Stations[8], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[18], Stations[24], Stations[25], Stations[23]],
};

var Route = {
    1: {7: 1, 9: 2, 10: 3, 11: 4, 12: 5, 13: 6, 14: 7, 15: 8, 16: 9, 23: 10},
    2: {7: 11, 8: 12, 9: 13, 10: 14, 11: 15, 12: 16, 13: 17, 14: 18, 23: 14},
    3: {6: 15, 7: 16, 9: 17, 10: 18, 11: 19, 12: 20, 13: 21, 14: 22, 15: 23, 16: 24, 23: 25},
    4: {6: 26, 7: 27, 8: 28, 9: 29, 10: 30, 11: 31, 12: 32, 13:33, 14: 34, 15: 35, 16: 36, 23: 37},
    5: {7: 38, 9: 39, 10: 40, 11: 41, 12: 42, 13:43, 14: 44, 15: 45, 16: 46, 23: 47},
    6: {2: 48, 4: 49, 7: 50, 8: 51, 9: 52, 10: 53, 11: 54, 12: 55, 13: 56, 14: 58, 15: 58, 16: 59, 18: 60, 24: 41, 25: 62, 23: 63},
    7: {1: 64, 2: 65, 3: 66, 4: 67, 5: 68, 6: 69, 9: 70, 10: 71, 11: 72, 12: 73, 13: 74, 14: 75, 15: 76, 16: 77, 17: 78, 18: 79, 23: 80},
    8: {2: 81, 4: 82, 6: 83, 23: 84},
    9: {1: 85, 2: 86, 3: 87, 4: 88, 5: 89, 6: 90, 7:91, 10: 92, 11: 93, 12: 94, 13: 95, 14: 96, 15: 97, 16: 98, 17: 99, 18: 100, 24: 101, 25: 102, 23: 103},
    10: {1: 104, 2: 105, 3: 106, 4: 107, 5: 108, 6: 109, 7: 110, 9: 111, 11: 112, 12: 113, 13: 114, 14: 115, 15: 116, 16: 117, 17: 118, 18: 119, 24: 120, 25: 121, 23: 122},
    11: {1: 123, 2: 124, 3: 125, 4: 126, 5: 127, 6: 128, 7: 129, 9: 130, 10: 131, 12: 132, 13: 133, 14: 134, 15: 135, 16: 136, 17: 137, 18: 138, 24: 139, 25: 140, 23: 141},
    12: {1: 142, 2: 143, 3: 144, 4: 145, 5: 146, 6: 147, 7: 148, 9: 149, 10: 150, 11: 151, 13: 152, 14: 153, 15: 154, 16: 155, 17: 156, 18: 157, 24: 158, 25: 159, 23: 160},
    13: {1: 161, 2: 162, 3: 163, 4: 164, 5: 165, 6: 166, 7: 167, 9: 168, 10: 169, 11: 170, 12: 171, 14: 172, 15: 173, 16: 174, 17: 175, 18: 176, 24: 177, 25: 178, 23: 179},
    14: {1: 180, 2: 181, 3: 182, 4: 183, 5: 184, 6: 185, 7: 186, 9: 187, 10: 188, 11: 189, 12: 190, 13: 191, 15: 192, 16: 193, 17: 194, 18: 195, 24: 196, 25: 197, 23: 198},
};

function loadFromLost()
{
    var list = [Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[7], Stations[8], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[18], Stations[19], Stations[20], Stations[11], Stations[22], Stations[23]];
    for(var i = 0; i < list.length; i++)
    {
        document.querySelector("#form_from").appendChild(list[i]);
    }
}

function scrollToRoute()
{
    $('html,body').animate({ scrollTop: $("#l-route").offset().top }, 1100);
    return false;
}
$(document).ready(function () {
    $("#l-route").css('display', 'none');
    loadFromLost();
    $("#form_from").on('change', function () {
        Select.station(this.value);
        $("select").selectpicker('refresh');
    });
    $("#form_to").on('change', function () {
        Select.station(this.value);
        $("select").selectpicker('refresh');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    $('select').selectpicker();
    var svg = document.querySelector("#scheme");
    svg.addEventListener("load",function(){
        var svgDoc = svg.contentDocument;
        var stations = svgDoc.querySelectorAll("g[id^='station_']");
        $(stations).click(function () {
            var id= this.id.split('_');
            id = id[1];
            Select.station(id);
        });
        $(svgDoc).click(function () {
            if (Select.need_reset === true) {
                resetRoute();
                Select.need_reset = false;
            }
            $("select").selectpicker('refresh');
        });
    }, false);
}, false);

function showRoute(from, to) {
    var id = Route[from][to];
    var l_scheme = $("#l-scheme");
    var l_route = $("#l-route");
    l_scheme.animate({width: 'toggle'}, "fast");
    l_route.hide();
    if (id == null) return;
    try {
        $("#route").attr('data', 'media/scheme/route_' + id + '.svg');
        $("#scheme").attr('data', 'media/scheme/scheme_' + id + '.svg');
        l_scheme.animate({width: 'toggle'}, "fast");
        l_route.show(function () {
            scrollToRoute();
        });
    }
    catch (e) {
        console.error("Файл ещё не прорисован");
    }
}

function resetRoute()
{
    $("#l-route").hide();
    $("#scheme").attr('data', 'media/scheme/scheme.svg');
    $("#form_from").val('0');
    $("#form_to").val('0');
    $("select").selectpicker('refresh');
}

function completeTo(val) {
    $("#form_to > option").remove();
    var s = Assets[val];
    for(var i = 0; i < s.length; i++)
    {
        document.querySelector("#form_to").appendChild(s[i]);
    }
    $("#form_to").val('0');
    $("select").selectpicker('refresh');
}

var Select = {
    mode: {
        from: true,
        to: false
    },
    from: 0,
    to: 0,
    need_reset: false,
    station: function (id) {
        if (this.mode.from === true) {
            if (this.need_reset === true) return;
            $("#form_from").val(id);
            this.from = id;
            completeTo(id);
            this.mode.from = false;
            this.mode.to = true;
            $("#scheme").attr('data', 'media/scheme/station_' + id + '.svg');
        }
        else {
            if (this.need_reset === true) return;
            $("#form_to").val(id);
            this.to = id;
            this.mode.from = true;
            this.mode.to = false;
            showRoute(this.from, this.to);
            var t = setTimeout("Select.setReset()", 1000);
        }
    },
    setReset: function () {
        this.need_reset = true;
    }
};
