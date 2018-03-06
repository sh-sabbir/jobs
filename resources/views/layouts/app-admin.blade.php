<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Clipping Service Provider</title>

    {{--  <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">  --}}
    {{--  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">  --}}

    {{--  paper-dashboard css  --}}
    <link href="{{ asset('css/ext/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/ext/paper-dashboard.css') }}" rel="stylesheet">
    <link href="{{ asset('css/ext/animate.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/ext/themify-icons.css') }}" rel="stylesheet">

    <!--  Fonts and icons     -->
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Muli:400,300' rel='stylesheet' type='text/css'>
</head>
<body>
    <div class="wrapper">
        <div {{--id="app"--}}>
            
            @include('partials.navbar')
            
            @yield('content')
            
            
        </div>
    </div>

    {{--  <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>  --}}
    {{--  paper-dashboard scripts  --}}
    <script src="{{ asset('js/ext/jquery.min.js') }}"></script>
    <script src="{{ asset('js/ext/bootstrap.min.js') }}"></script>
    <script src="{{ asset('js/ext/bootstrap-notify.js') }}"></script>
    <script src="{{ asset('js/ext/bootstrap-checkbox-radio.js') }}"></script> 
    <script src="{{ asset('js/ext/paper-dashboard.js') }}"></script>
</body>
</html>
