<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="media/css/bootstrap.min.css">
    <link rel="stylesheet" href="media/css/bootstrap-select.min.css">
    <link rel="icon" href="media/images/favicon.png" type="image/x-icon" />

    <title>АРМИЯ-2019. Навигация.</title>
</head>
<body>
<div class="container">
    <div><h6>Схема движения транспорта Армия-2019</h6></div>
    <div class="form-group">
        <div class="form-group">
            <select name="from" id="form_from" class="form-control">
                <option value="0">Откуда</option>
            </select>
        </div>
        <div class="form-group">
            <select name="to" id="form_to" class="form-control">
                <option value="0">Куда</option>
            </select>
        </div>
    </div>
    <div class="w-100" id="l-scheme">
        <object type="image/svg+xml" id="scheme" data="media/scheme/scheme.svg">Не удаётся загрузить схему</object>
    </div>
    <div class="text-center" id="l-route">
        <h4>Маршрут в деталях</h4>
        <object type="image/svg+xml" id="route" height="100px">Маршрут ещё не прорисован</object>
    </div>
</div>
<script src="media/js/jquery-3.4.1.min.js"></script>
<script src="media/js/stations.js"></script>
<script src="media/js/popper.min.js"></script>
<script src="media/js/bootstrap.min.js"></script>
<script src="media/js/bootstrap-select.min.js"></script>
</body>
</html>
