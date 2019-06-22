function Station(id, title) {
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
    100: new Station(100, 'Патриот Экспо'),
    101: new Station(101, 'Парковка'),
};

var Assets = {
    '0': [Stations[0]],
    '1': [Stations[0], Stations[100], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[23]],
    '2': [Stations[0], Stations[100], Stations[7], Stations[8], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[23]],
    '3': [Stations[0], Stations[6], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[23]],
    '4': [Stations[0], Stations[6], Stations[7], Stations[8], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[23]],
    '5': [Stations[0], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[23]],
    '6': [Stations[0], Stations[101], Stations[2], Stations[4], Stations[7], Stations[8], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[18], Stations[24], Stations[25], Stations[23]],
    '7': [Stations[0], Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[18], Stations[23]],
    '8': [Stations[0], Stations[2], Stations[4], Stations[6], Stations[23]],
    '9': [Stations[0], Stations[101], Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[7], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[24], Stations[25], Stations[23]],
    '10': [Stations[0], Stations[101], Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[7], Stations[9], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[24], Stations[25], Stations[23]],
    '11': [Stations[0], Stations[101], Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[7], Stations[9], Stations[10], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[24], Stations[25], Stations[23]],
    '12': [Stations[0], Stations[101], Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[7], Stations[9], Stations[10], Stations[11], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[24], Stations[25], Stations[23]],
    '13': [Stations[0], Stations[101], Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[14], Stations[15], Stations[16], Stations[17], Stations[24], Stations[25], Stations[23]],
    '14': [Stations[0], Stations[101], Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[15], Stations[16], Stations[17], Stations[24], Stations[25], Stations[23]],
    '15': [Stations[0], Stations[101], Stations[1], Stations[3], Stations[5], Stations[7], Stations[9], Stations[18], Stations[24], Stations[25]],
    '16': [Stations[0], Stations[101], Stations[1], Stations[3], Stations[5], Stations[7], Stations[9], Stations[18], Stations[24], Stations[25]],
    '17': [Stations[0], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14]],
    '18': [Stations[0], Stations[1], Stations[3], Stations[5], Stations[7]],
    '19': [Stations[0], Stations[6], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[23]],
    '20': [Stations[0], Stations[6], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[23]],
    '21': [Stations[0], Stations[6], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[23]],
    '22': [Stations[0], Stations[6], Stations[7], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[23]],
    '23': [Stations[0], Stations[101], Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[7], Stations[8], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[18], Stations[24], Stations[25], Stations[23]],
};

var Scheme = {
    get: function () {
        var svg = document.querySelector("#scheme");
        return svg.contentDocument;
    },
    update: function() {
        var s = this.get();
        var stations = s.querySelectorAll("g[id^='station_']");
        var rt = s.querySelectorAll("[id^='rt']");
        var rw = s.querySelectorAll("[id^='rw_']");
        var st = s.querySelectorAll("[id^='st_']");
        var crs = s.querySelectorAll("[id^='crs_']");
        var ns = s.querySelectorAll("[id^='not_show']");
        var info = s.querySelectorAll("[id^='info']");
        $(stations, st).animate({
            opacity: Scheme.Off.opc
        });
        $(rt).animate({
            opacity: Scheme.Off.opc
        });
        $(crs).animate({
            opacity: Scheme.Off.opc
        });
        $(rw).animate({
            opacity: Scheme.Off.opc
        });
        $(ns).animate({
            opacity: Scheme.Off.opc
        });
        $(info).animate({
            opacity: Scheme.Off.opc
        });
        if (!Select.mode.from) {
            var list = Assets[Select.from];
            for (var i = 1; i <= list.length; i++)
            {
                var elem = $(list[i]).val();
                var e = s.querySelector("g[id='station_" + elem + "']");
                $(e).animate({
                    opacity: Scheme.On.opc
                }, Scheme.On.lat);
            }
        }
        else
        {
            list = Route2[Select.from][Select.to];
            for (var j = 0; j <= list.length; j++)
            {
                if (list[j] === undefined) continue;
                e = s.querySelector("#" + list[j]);
                $(e).animate({
                    opacity: Scheme.On.opc
                }, Scheme.On.lat);
            }
            $(s.querySelector("g[id^='station_" + Select.from + "']")).animate({
                opacity: Scheme.On.opc
            }, Scheme.On.lat);
            $(s.querySelector("g[id^='station_" + Select.to + "']")).animate({
                opacity: Scheme.On.opc
            }, Scheme.On.lat);
            showRoute(Select.from, Select.to);
            $(stations).css('cursor', 'default');
        }
    },
    On: {
        opc: 1.0,
        lat: 300
    },
    Off: {
        opc: 0.05,
        lat: 300
    },
};

var Route = {
    1: {7: 1, 9: 2, 10: 3, 11: 4, 12: 5, 13: 6, 14: 7, 15: 8, 16: 9, 23: 10},
    2: {7: 11, 8: 12, 9: 13, 10: 14, 11: 15, 12: 16, 13: 17, 14: 18, 23: 19},
    3: {6: 20, 7: 21, 9: 22, 10: 23, 11: 24, 12: 25, 13: 26, 14: 27, 15: 28, 16: 29, 23: 30},
    4: {6: 31, 7: 32, 8: 33, 9: 34, 10: 35, 11: 36, 12: 37, 13:38, 14: 39, 15: 40, 16: 41, 23: 42},
    5: {7: 43, 9: 44, 10: 45, 11: 46, 12: 47, 13:48, 14: 49, 15: 50, 16: 51, 23: 52},
    6: {2: 53, 4: 54, 7: 55, 8: 56, 9: 57, 10: 58, 11: 59, 12: 60, 13: 61, 14: 62, 15: 63, 16: 64, 18: 65, 24: 66, 25: 67, 23: 68},
    7: {1: 69, 2: 70, 3: 71, 4: 72, 5: 73, 6: 74, 9: 75, 10: 76, 11: 77, 12: 78, 13: 79, 14: 80, 15: 81, 16: 82, 17: 83, 18: 84, 23: 85},
    8: {2: 86, 4: 87, 6: 88, 23: 89},
    9: {1: 90, 2: 91, 3: 92, 4: 93, 5: 94, 6: 95, 7:96, 10: 97, 11: 98, 12: 99, 13: 100, 14: 101, 15: 102, 16: 103, 17: 104, 18: 105, 24: 106, 25: 107, 23: 108},
    10: {1: 109, 2: 110, 3: 111, 4: 112, 5: 113, 6: 114, 7: 115, 9: 116, 11: 117, 12: 118, 13: 119, 14: 120, 15: 121, 16: 122, 17: 123, 18: 124, 24: 125, 25: 126, 23: 127},
    11: {1: 128, 2: 129, 3: 130, 4: 131, 5: 132, 6: 133, 7: 134, 9: 135, 10: 136, 12: 137, 13: 138, 14: 139, 15: 140, 16: 141, 17: 142, 18: 143, 24: 144, 25: 145, 23: 146},
    12: {1: 147, 2: 148, 3: 149, 4: 150, 5: 151, 6: 152, 7: 153, 9: 154, 10: 155, 11: 156, 13: 157, 14: 158, 15: 159, 16: 160, 17: 161, 18: 162, 24: 163, 25: 164, 23: 165},
    13: {1: 166, 2: 167, 3: 168, 4: 169, 5: 170, 6: 171, 7: 172, 9: 173, 10: 174, 11: 175, 12: 176, 14: 177, 15: 178, 16: 179, 17: 180, 18: 181, 24: 182, 25: 183, 23: 184},
    14: {1: 185, 2: 186, 3: 187, 4: 188, 5: 189, 6: 190, 7: 191, 9: 192, 10: 193, 11: 194, 12: 195, 13: 196, 15: 197, 16: 198, 17: 199, 18: 200, 24: 201, 25: 202, 23: 203},
    15: {1: 204, 3: 205, 5: 206, 7: 207, 9: 208, 18: 209, 24: 210, 25: 211},
    16: {1: 212, 3: 213, 5: 214, 7: 215, 9: 216, 18: 217, 24: 218, 25: 219},
    17: {9: 220, 10: 221, 11: 222, 12: 223, 13: 224, 14: 225},
    18: {1: 226, 3: 227, 5: 228, 7: 229},
    19: {6: 230, 7: 231, 9: 232, 10: 233, 11: 234, 12: 235, 13: 236, 14: 237, 15: 238, 16: 239, 17: 240, 23: 241},
    20: {6: 242, 7: 243, 9: 244, 10: 245, 11: 246, 12: 247, 13: 248, 14: 249, 15: 250, 16: 251, 17: 252, 23: 253},
    21: {6: 254, 7: 255, 9: 256, 10: 257, 11: 258, 12: 259, 13: 260, 14: 261, 15: 262, 16: 263, 17: 264, 23: 265},
    22: {6: 266, 7: 267, 9: 268, 10: 269, 11: 270, 12: 271, 13: 272, 14: 273, 15: 274, 16: 275, 17: 276, 23: 277},
    23: {1: 278, 2: 279, 3: 280, 4: 281, 5: 282, 6: 283, 7: 284, 8: 285, 9: 286, 10: 287, 11: 288, 12: 289, 13: 290, 14: 291, 18: 292, 24: 293, 25: 294},
};

var Route2 = {
    1: {
        7: ['st_1', 'rt_1-3', 'st_3', 'st_3-4', 'rt_4_3-16', 'rt_4_16-15', 'st_15-4'],
        9: ['st_1', 'rt_1-3', 'st_3', 'st_3-4', 'rt_4_3-16', 'st_16-4', 'st_16-1', 'rt_1_16-15', 'rt_1_15-19', 'rt_1_19-25', 'rt_1_25-24', 'rt_1_24-20', 'rt_1_20-21', 'rt_1_21-22', 'rt_1_22-23', 'rt_1_23-9', 'st_9-1'],
        10: ['st_1', 'rt_1-3', 'st_3', 'rt_3-16', 'st_16', 'rt_16-10', 'st_10'],
        11: ['st_1', 'rt_1-3', 'st_3', 'rt_3-16', 'st_16', 'rt_16-11', 'st_11'],
    },
    3: {
        15: ['st_3', 'st_3_4', 'rt_4_3-16', 'st_16', 'rt_4_16-15', 'st_15_4'],
        7: ['st_3', 'rw_3-5', 'crs_rw-5a', 'st_5_5a', 'rt_5a_5-7', 'st_7_5a'],
        16: ['st_3', 'st_3_4', 'rt_4_3-16', 'st_16_4'],
        9: ['st_3', 'st_3_4', 'rt_4_3-16', 'st_16_4', 'st_16_1', 'rt_1_16-15', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19-25', 'st_25_1', 'rt_1_25-24', 'st_24', 'rt_1_24-20', 'rt_1_20-21', 'rt_1_21-22', 'rt_1_22-26', 'rt_1_26-9', 'st_9-1'],
        10: ['st_3', 'st_3_4', 'rt_4_3-16', 'st_16_4', 'st_16_1', 'rt_1_16-15', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19-25', 'st_25_1', 'rt_1_25-24', 'st_24', 'rt_1_24-20', 'rt_1_20-21', 'rt_1_21-22', 'rt_1_22-26', 'rt_1_26-9', 'st_9-1'],
        23: ['st_3', 'st_3_4', 'rt_4_3-16', 'st_16_4', 'st_16_23', 'crs_16-8', 'st_8_3', 'rt_3_8-23', 'st_23'],
        6: ['st_3', 'st_3_4', 'rt_4_3-16', 'st_16_4', 'st_16_23', 'crs_16-8', 'station_8', 'rt_3_8-23', 'station_23', 'rt_3_23-6', 'st_6_3'],
    },
    16: { //Входная C. Написаны.
        3: ['info', 'st_16_1', 'ico_16_1', 'rt_1_16-15', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19_25', 'st_25_1', 'rt_1_25-24', 'st_24_1', 'ico_24_1', 'crs_24-18_4', 'ico_18_4', 'st_18_4', 'rt_4_18-3', 'ico_3_4'],
        1: ['st_16_1', 'ico_16_1', 'rt_1_16-15', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19_25', 'st_25_1', 'rt_1_25-24', 'st_24_1', 'ico_24_1', 'crs_24-18_4', 'ico_18_4', 'st_18_4', 'rt_4_18-3', 'ico_3_4', 'ico_3_rw', 'st_3', 'rt_1-3', 'st_1'],
        5: ['info', 'st_16_1', 'ico_16_1', 'rt_1_16-15', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19_25', 'st_25_1', 'rt_1_25-24', 'st_24_1', 'ico_24_1', 'crs_24-18_5', 'ico_18_5', 'st_18_5', 'rt_5_18-5', 'ico_5_5'],
        7: ['st_16_1', 'ico_16_1', 'rt_1_16-15', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19_25', 'st_25_1', 'rt_1_25-24', 'st_24_1', 'ico_24_1', 'crs_24-18_5', 'ico_18_5', 'st_18_5', 'rt_5_18-5', 'ico_5_5', 'ico_5_5a', 'rt_5a_5-7', 'st_7', 'ico_7_5a'],
        9: ['st_16_1', 'ico_16_1', 'rt_1_16-15', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19_25', 'st_25_1', 'rt_1_25-24', 'st_24_1', 'rt_1_24-20', 'st_20_1', 'rt_1_20-21', 'st_21_1', 'rt_1_21-22', 'st_22_1', 'rt_1_22-26', 'st_26_1', 'rt_1_26-9', 'st_9_1'],
        18: ['st_16_1', 'ico_16_1', 'rt_1_16-15', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19_25', 'st_25_1', 'rt_1_25-24', 'st_24_1', 'crs_24-18_4'],
        24: ['st_16_1', 'ico_16_1', 'rt_1_16-15', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19_25', 'st_25_1', 'rt_1_25-24'],
        25: ['st_16_1', 'ico_16_1', 'rt_1_16-15', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19_25'],
    },
    15: { //Входная B. Написаны.
        3: ['info', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19_25', 'st_25_1', 'rt_1_25-24', 'st_24_1', 'ico_24_1', 'crs_24-18_4', 'ico_18_4', 'st_18_4', 'rt_4_18-3', 'ico_3_4'],
        1: ['st_16_1', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19_25', 'st_25_1', 'rt_1_25-24', 'st_24_1', 'ico_24_1', 'crs_24-18_4', 'ico_18_4', 'st_18_4', 'rt_4_18-3', 'ico_3_4', 'ico_3_rw', 'st_3', 'rt_1-3', 'st_1'],
        5: ['info', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19_25', 'st_25_1', 'rt_1_25-24', 'st_24_1', 'ico_24_1', 'crs_24-18_5', 'ico_18_5', 'st_18_5', 'rt_5_18-5', 'ico_5_5'],
        7: ['st_16_1', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19_25', 'st_25_1', 'rt_1_25-24', 'st_24_1', 'ico_24_1', 'crs_24-18_5', 'ico_18_5', 'st_18_5', 'rt_5_18-5', 'ico_5_5', 'ico_5_5a', 'rt_5a_5-7', 'st_7', 'ico_7_5a'],
        9: ['st_16_1', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19_25', 'st_25_1', 'rt_1_25-24', 'st_24_1', 'rt_1_24-20', 'st_20_1', 'rt_1_20-21', 'st_21_1', 'rt_1_21-22', 'st_22_1', 'rt_1_22-26', 'st_26_1', 'rt_1_26-9', 'st_9_1'],
        18: ['st_16_1', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19_25', 'st_25_1', 'rt_1_25-24', 'st_24_1', 'crs_24-18_4'],
        24: ['st_16_1', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19_25', 'st_25_1', 'rt_1_25-24'],
        25: ['st_16_1', 'st_15_1', 'rt_1_15-19', 'st_19_1', 'rt_1_19_25'],
    },
    18: { //Парковка O. Написаны.
        1: ['rt_4_18-3', 'ico_3_4', 'ico_3_rw', 'st_3', 'rt_1-3'],
        3: ['rt_4_18-3'],
        5: ['st_18_5', 'rt_5_18-5', 'ico_5_5'],
        7: ['st_18_5', 'rt_5_18-5', 'ico_5_5', 'ico_5_5a', 'crs_5-5a', 'rt_5a_5-7'],
    },
};

function loadFromList()
{
    var list = [Stations[1], Stations[2], Stations[3], Stations[4], Stations[5], Stations[6], Stations[7], Stations[8], Stations[9], Stations[10], Stations[11], Stations[12], Stations[13], Stations[14], Stations[15], Stations[16], Stations[17], Stations[18], Stations[19], Stations[20], Stations[11], Stations[22], Stations[23]];
    for(var i = 0; i < list.length; i++)
    {
        document.querySelector("#form_from").appendChild(list[i]);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    $('select').selectpicker();
    loadFromList();
    $("#form_from").on('change', function () {
        Select.station(this.value);
        $("select").selectpicker('refresh');
        Scheme.update();
    });
    $("#form_to").on('change', function () {
        Select.station(this.value);
        $("select").selectpicker('refresh');
        Scheme.update();
    });
    var svg = document.querySelector("#scheme");
    svg.addEventListener("load",function(){
        var s = Scheme.get();
        var stations = s.querySelectorAll("g[id^='station_']");
        $(stations).css('cursor', 'pointer');
        $(stations).click(function () {
            if (Select.need_reset) return;
            var id= this.id.split('_');
            id = id[1];
            Select.station(id);
            $("select").selectpicker('refresh');
            Scheme.update();
        });
    }, false);
    $("#link-reset").click(function () {
        location.reload();
    });
}, false);

function showRoute(from, to) {
    var id = Route[from][to];
    var l_route = $("#l-route");
    var l_form = $("#l-form");
    l_form.slideUp();
    if (id == null) return;
    try {
        $("#route").attr('data', 'media/scheme/route_' + id + '.svg');
        l_route.slideDown();
    }
    catch (e) {
        console.error("Файл ещё не прорисован");
    }
}

function loadToList(val) {
    $("#form_to > option").remove();
    var s = Assets[val];
    for(var i = 0; i < s.length; i++)
    {
        document.querySelector("#form_to").appendChild(s[i]);
    }
    $("#form_to").val('0').selectpicker('refresh');
}

var Select = {
    mode: {
        from: true,
        to: false
    },
    from: 0,
    to: 0,
    need_reset: false,
    station: function (stationID) {
        if (this.mode.from === true) {
            if (this.need_reset === true) return;
            $("#form_from").val(stationID);
            this.from = stationID;
            loadToList(stationID);
            this.mode.from = false;
            this.mode.to = true;
        }
        else {
            if (this.need_reset === true) return;
            $("#form_to").val(stationID);
            this.to = stationID;
            if (parseInt(stationID) === 100) {
                switch (parseInt(this.from)) {
                    case 1:
                    case 3:
                    case 5:
                        this.to = 15;
                        break;
                    case 2:
                    case 4:
                        this.to = 8;
                        break;
                }
            }
            if (parseInt(stationID) === 101) this.to = 24;
            this.mode.from = true;
            this.mode.to = false;
            var t = setTimeout("Select.setReset()", 1000);
        }
    },
    setReset: function () {
        this.need_reset = true;
    }
};
