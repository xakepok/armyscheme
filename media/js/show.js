'use strict';
var Stations = {
    0: new Station(0, 'Куда'),
    1: new Station(1, 'Москва (Белорусский вокзал)'),
    2: new Station(2, 'Москва (Киевский вокзал)'),
    3: new Station(3, 'Ст. Голицыно'),
    4: new Station(4, 'Ст. Селятино'),
    5: new Station(5, 'Ст. Кубинка'),
    6: new Station(6, 'Парадная Площадка'),
    7: new Station(7, 'Аэродром Кубинка'),
    8: new Station(8, 'Патриот Экспо - проезд на демопрограмму'),
    9: new Station(9, 'Музейный комплекс / площадка №1 / ВПК'),
    10: new Station(10, 'Броневагон'),
    11: new Station(11, 'Центр военно-тактических игр'),
    12: new Station(12, 'Юнармия / Партизанская деревня / Конно-спортивный комплекс'),
    13: new Station(13, 'Стрелковый клуб Калашников'),
    14: new Station(14, 'Многофункциональный огневой центр'),
    15: new Station(15, 'Входная группа B'),
    16: new Station(16, 'Входная группа C'),
    17: new Station(17, 'Входная группа D'),
    18: new Station(18, 'Парковка сектор O'),
    19: new Station(19, 'Парковка сектор A'),
    20: new Station(20, 'Парковка сектор K'),
    21: new Station(21, 'Парковка сектор F'),
    22: new Station(22, 'Парковка сектор C'),
    23: new Station(23, 'Полигон Алабино'),
    24: new Station(24, 'Парковка сектор J'),
    25: new Station(25, 'Парковка сектор E'),
    26: new Station(19, 'Парковка сектор A (вост.)'),
    100: new Station(100, 'Патриот Экспо'),
    101: new Station(101, 'Парковка'),
    get: function (id) {
        return Stations[id].title;
    }
};
var Stops = {
    Assets: {
        3: {
            p1: {
                x: 55.61990930758416,
                y: 36.9769941479473,
            },
            p2: {
                x: 55.61019388885476,
                y: 36.999395957639734,
            }
        },
        5: {
            p1: {
                x: 55.58348832759691,
                y: 36.671393981626444,
            },
            p2: {
                x: 55.56727472406979,
                y: 36.71245708074248,
            }
        },
        7: {
            p1: {
                x: 55.628762032481355,
                y: 36.59958972539548,
            },
            p2: {
                x: 55.59096403453868,
                y: 36.691256900688444,
            }
        },
        11: {
            p1: {
                x: 55.5552695116552,
                y: 36.83159588493331,
            },
            p2: {

            }
        },
        16: {
            p1: {
                x: 55.570378,
                y: 36.832880,
            },
            p2: {
                x: 55.567651,
                y: 36.834538,
            }
        },
    },
    get: function (latitude, longitude) {
        var id = -1;
        for (var stop in Stops.Assets) {
            if (Stops.Assets[stop].p2.x <= latitude && Stops.Assets[stop].p1.x >= latitude && Stops.Assets[stop].p1.y <= longitude && Stops.Assets[stop].p2.y >= longitude)
            {
                id = stop;
                break;
            }
        }
        return (id >= 0) ? Stations.get(id) : 'Далеко';
    },
};

function Station(id, title) {
    this.id = id;
    this.title = title;
}

document.addEventListener('DOMContentLoaded', function () {
    var table = $('#data').DataTable({
        ajax: "show.php?ajax",
        columns: [
            {data: 'dat'},
            {
                data: 'from', render: function (data) {
                    return Stations[data].title
                }
            },
            {
                data: 'to', render: function (data) {
                    return Stations[data].title
                }
            },
            {
                data: 'coords', render: function (data) {
                    if (data === '0') return 'Далеко';
                    var coords = data.split(',');
                    var latitude = parseFloat(coords[0]);
                    var longitude = parseFloat(coords[1]);
                    return Stops.get(latitude, longitude);
                }
            },
        ],
        order: [[0, "desc"]],
        pageLength: 100,
    });
    setInterval( function () {
        table.ajax.reload();
    }, 10000 );
});
