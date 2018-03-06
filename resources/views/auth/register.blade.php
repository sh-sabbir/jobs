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
                        <form class="form-signin" method="POST" action="{{ route('register') }}">
                            @csrf

                            <input id="name" type="email" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" placeholder="Full Name" value="{{ old('name') }}" required>

                            <input id="email" style="border-radius:0;" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" placeholder="Email" value="{{ old('email') }}" required>

                            <input id="password" style="border-radius:0; margin-bottom: -1px;" type="password" placeholder="Enter Password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                            <input id="password-confirm" type="password" placeholder="Repeat Password" class="form-control" name="password_confirmation" required>


                            @if ($errors->has('password'))
                                <span class="invalid-feedback">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif

                            @if ($errors->has('name'))
                                <span class="invalid-feedback">
                                    <strong>{{ $errors->first('name') }}</strong>
                                </span>
                            @endif

                            @if ($errors->has('email'))
                                <span class="invalid-feedback">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary  custom-butt">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                        <span class="text-center new-account"> Have Account? <a href="{{ route('login') }}" >Login Here </a></span>
                    </div>
            </div>
        </div>
    </div>
</body>
</html>
