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
<body>
    <div class="small-top">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <!-- Start Social Links -->
                    <ul class="social-icon pull-left">
                        <li>
                            <a class="facebook itl-tooltip" target="_blank" rel="nofollow" data-placement="bottom"
                               title="facebook" href="https://www.facebook.com/ClippingPathStudio/"><i
                                        class="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a class="twitter itl-tooltip" target="_blank" rel="nofollow" data-placement="bottom"
                               title="twitter" href="https://twitter.com/clippinggraphic"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a class="google-plus itl-tooltip" target="_blank" rel="nofollow" data-placement="bottom"
                               title="google-plus" href="https://plus.google.com/+Clippinggraphics"><i
                                        class="fa fa-google-plus"></i></a>
                        </li>
                        <li>
                            <a class="linkedin itl-tooltip" target="_blank" rel="nofollow" data-placement="bottom"
                               title="linkedin" href="https://www.linkedin.com/company/clipping-graphics"><i
                                        class="fa fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a class="tumblr itl-tooltip" target="_blank" rel="nofollow" data-placement="bottom"
                               title="tumblr" href="http://www.clippinggraphics.tumblr.com/"><i
                                        class="fa fa-tumblr"></i></a>
                        </li>
                        <li>
                            <a class="youtube itl-tooltip" target="_blank" rel="nofollow" data-placement="bottom"
                               title="youtube" href="https://www.youtube.com/channel/UCPCgyH4kgXPWN5Jd7l5XpKQ"><i
                                        class="fa fa-youtube"></i></a>
                        </li>
                    </ul>
                    <!-- End Social Links -->
                </div>
                <div class="col-md-6">
                    <!-- Start Contact Info -->
                    <ul class="contact-details desktopOnly pull-right">
                        <li><a href="mailto:info@clippingserviceprovider.com"><i class="fa fa-envelope-o"></i>
                                info@clippinggraphics.com</a></li>
                        <li><a href="tel:+8801636616960"><i class="fa fa-phone"></i> +880 1636616960</a></li>
                        <li><a href="#"><i class="fa fa-user"></i> {{Auth::user()->name}}</a></li>
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
                        <a href="{{route('home')}}" class="nav-link">Home</a>
                        <a href="{{route('user.profile')}}" class="nav-link">My Profile</a>
                        <a href="{{route('user.create-post')}}" class="nav-link">New Job</a>
                        <a href="{{ route('user.my-jobs') }}" class="nav-link">Review Job</a>
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
                        <p>© 2018 Clipping Service Provider - All Rights Reserved. Developed with <i class="fa fa-heart"
                                                                                                     style="color: red;"></i>
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
    <script type="text/javascript" src="{{ asset('js/bootstrap.min.js') }}"></script>
</body>
</html>
