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
    
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="{{ asset('css/front.css') }}" rel="stylesheet">
    <link href="{{ asset('css/dropzone.css') }}" rel="stylesheet">
    <link href="{{ asset('css/basic.css') }}" rel="stylesheet">
</head>
<body>
    <div class="small-top">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <!-- Start Social Links -->
                    <ul class="social-icon pull-left">
                        <li>
                            <a class="facebook itl-tooltip" target="_blank" rel="nofollow" data-placement="bottom"
                               title="facebook" href="https://www.facebook.com/Clippingserviceproviders"><i
                                        class="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a class="twitter itl-tooltip" target="_blank" rel="nofollow" data-placement="bottom"
                               title="twitter" href="https://twitter.com/clippingservics"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a class="google-plus itl-tooltip" target="_blank" rel="nofollow" data-placement="bottom"
                               title="google-plus" href="https://plus.google.com/u/0/100186622038909814301"><i
                                        class="fa fa-google-plus"></i></a>
                        </li>
                        <li>
                            <a class="linkedin itl-tooltip" target="_blank" rel="nofollow" data-placement="bottom"
                               title="linkedin" href="https://www.linkedin.com/company/4802856"><i
                                        class="fa fa-linkedin"></i></a>
                        </li>
                        <li style="display: none !important;">
                            <a class="tumblr itl-tooltip" target="_blank" rel="nofollow" data-placement="bottom"
                               title="tumblr" href="http://www.clippinggraphics.tumblr.com/"><i
                                        class="fa fa-tumblr"></i></a>
                        </li>
                        <li>
                            <a class="youtube itl-tooltip" target="_blank" rel="nofollow" data-placement="bottom"
                               title="youtube" href="https://www.youtube.com/channel/UCy0z99McbWW_6tLCQdjPeog"><i
                                        class="fa fa-youtube"></i></a>
                        </li>
                    </ul>
                    <!-- End Social Links -->
                </div>
                <div class="col-md-7">
                    <!-- Start Contact Info -->
                    <ul class="contact-details desktopOnly pull-right">
                        <li><a href="tel:+8801636616960">Contact: +880 1636616960</a></li>
                        <li><a href="mailto:info@clippingserviceprovider.com">
                                Email: info@clippingserviceprovider.com</a></li>
                        <li><a href="{{route('user.profile')}}"><i class="fa fa-user"></i> {{Auth::user()->name}}</a></li>
                        <li><a href="{{ route('user.logout') }}"
                               onclick="event.preventDefault();document.getElementById('logout-form').submit();"><i
                                        class="fa fa-power-off"></i> LogOut</a></li>

                    </ul>
                    <!-- End Contact Info -->
                </div>

            </div>
        </div>
    </div>
    <div class="top-head left">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-lg-4">
                    <img src="{{ asset('img/logo.png') }}"/>
                </div>
                <div class="col-md-8 col-lg-8 ml-auto admin-bar hidden-sm-down">
                    <nav class="nav nav-inline pull-right">
                        <a href="{{route('home')}}" class="nav-link {{ (\Request::route()->getName() == 'home') ? 'active' : '' }}">Home</a>
                        <a href="{{route('user.profile')}}" class="nav-link {{ (\Request::route()->getName() == 'user.profile') ? 'active' : '' }}">My Profile</a>
                        <a href="{{route('user.create-post')}}" class="nav-link {{ (\Request::route()->getName() == 'user.create-post') ? 'active' : '' }}">New Job</a>
                        <a href="{{ route('user.my-jobs') }}" class="nav-link {{ (\Request::route()->getName() == 'user.my-jobs') ? 'active' : '' }}">Review Job</a>
                        <a href="{{ route('user.logout') }}" class="nav-link"
                           onclick="event.preventDefault();document.getElementById('logout-form').submit();"> Log Out</a>

                        <form id="logout-form" action="{{ route('user.logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    @yield('content')


    <div class="section-footer">
        <div class="container">
            <div class="copyright-section">
                <div class="row">
                    <div class="col-md-7">
                        <p>© 2018 Clipping Service Provider - All Rights Reserved. Developed with <i class="fa fa-heart" style="color: red;"></i>
                            by <a href="http://codeian.com.bd" target="_blank">Codeian</a></p>
                    </div>
                    <div class="col-md-5">
                        <ul class="footer-nav">
                            <li><a href="http://www.clippingserviceprovider.com/about-us/">About</a></li>
                            <li><a href="http://www.clippingserviceprovider.com/prices/">Price</a></li>
                            <li><a href="http://www.clippingserviceprovider.com/portfolio/">Portfolio</a></li>
                            <li><a href="http://www.clippingserviceprovider.com/contact/">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://unpkg.com/popper.js/dist/umd/popper.min.js"></script>
    <script type="text/javascript" src="{{ asset('js/bootstrap.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/dropzone.js') }}"></script>

    <script type="text/javascript">
        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        })
    </script>

    @stack('scripts')
</body>
</html>
