<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="media/css/bootstrap.min.css">

    <title>АРМИЯ-2019. Навигация.</title>
</head>
<body>
<div class="container">
    <div><h3>Select route</h3></div>
    <div class="form-row">
        <div class="form-group col-5">
            <select name="from" id="form_from" class="form-control">
                <option value="">Select from</option>
                <option value="1">Москва (Белорусский вокзал)</option>
                <option value="2">Москва (Киевский вокзал)</option>
                <option value="3">Ст. Голицыно</option>
                <option value="4">Ст. Селятино</option>
                <option value="5">Ст. Кубинка</option>
                <option value="6">Парадная площадка</option>
                <option value="7">Аэродром Кубинка</option>
                <option value="8">Входная группа D (№3)</option>
                <option value="9">Музейный комплекс / площадка №1 / ВПК</option>
                <option value="10">Броневагон</option>
                <option value="11">Центр военно-тактических игр</option>
                <option value="12">Юнармия / Партизанская деревня / Конно-спортивный комплекс</option>
                <option value="13">Стрелковый клуб Калашников</option>
                <option value="14">Многофункциональный огневой центр</option>
                <option value="15">Входная группа B</option>
                <option value="16">Входная группа C</option>
                <option value="17">Входная группа D (№2)</option>
                <option value="18">Парковка сектор O</option>
                <option value="18">Парковка сектор A</option>
                <option value="19">Парковка сектор K</option>
                <option value="20">Парковка сектор F</option>
                <option value="21">Парковка сектор C</option>
                <option value="22">Полигон Алабино</option>
            </select>
        </div>
        <div class="form-group col-5">
            <select name="to" id="form_to" class="form-control">
                <option value="">Select to</option>
                <option value="1">Москва (Белорусский вокзал)</option>
                <option value="2">Москва (Киевский вокзал)</option>
                <option value="3">Ст. Голицыно</option>
                <option value="4">Ст. Селятино</option>
                <option value="5">Ст. Кубинка</option>
                <option value="6">Парадная площадка</option>
                <option value="7">Аэродром Кубинка</option>
                <option value="8">Входная группа D (№3)</option>
                <option value="9">Музейный комплекс / площадка №1 / ВПК</option>
                <option value="10">Броневагон</option>
                <option value="11">Центр военно-тактических игр</option>
                <option value="12">Юнармия / Партизанская деревня / Конно-спортивный комплекс</option>
                <option value="13">Стрелковый клуб Калашников</option>
                <option value="14">Многофункциональный огневой центр</option>
                <option value="15">Входная группа B</option>
                <option value="16">Входная группа C</option>
                <option value="17">Входная группа D</option>
                <option value="18">Парковка сектор O</option>
                <option value="18">Парковка сектор O</option>
                <option value="23">Парковка сектор J</option>
                <option value="24">Парковка сектор E</option>
                <option value="22">Полигон Алабино</option>
            </select>
        </div>
        <div class="form-group col-2">
            <button type="submit" class="btn btn-primary" disabled>Go!</button>
        </div>
    </div>
    <div>
        <object type="image/svg+xml" data="media/scheme/scheme.svg">Sorry</object>
    </div>
    <div class="w-100" id="l-route">
        <h4>Маршрут в деталях</h4>
        <object type="image/svg+xml" id="route">No scheme</object>
    </div>
</div>

<script src="media/js/jquery-3.4.1.min.js"></script>
<script src="media/js/popper.min.js"></script>
<script src="media/js/bootstrap.min.js"></script>
<script src="media/js/stations.js"></script>
</body>
</html>
