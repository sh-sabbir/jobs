<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/bootstrap.css') }}" rel="stylesheet">
    <link href="{{ asset('css/front.css') }}" rel="stylesheet">
</head>
<body style="height:100vh;">
    <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-sm-6 col-md-4">

                <div class="account-wall">
                    <img class="profile-img" src="{{asset('img/logo.png')}}" alt="">
                    <form class="form-signin" method="POST" action="{{ route('login') }}">
                        @csrf
                        
                        <input id="email" type="email" placeholder="Email" class="form-control {{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>
                        <input id="password" type="password" placeholder="Password" class="form-control {{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                        @if ($errors->has('email'))
                            <span class="invalid-feedback">
                                <strong>{{ $errors->first('email') }}</strong>
                            </span>
                        @endif

                        @if ($errors->has('password'))
                            <span class="invalid-feedback">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                        @endif

                        <button class="btn btn-lg btn-primary btn-block custom-butt" type="submit">Sign in</button>
                        <label class="checkbox pull-left">
                            <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
                        </label>
                        <a href="{{ route('password.request') }}" class="pull-right need-help">Forgot Your Password?</a><span class="clearfix"></span>

                    </form>
                    
                    <span class="text-center new-account"> Need Account? <a href="{{ route('register') }}" >Create on here </a></span>
                </div>
            </div>
        </div>
    </div>
</body>
</html>