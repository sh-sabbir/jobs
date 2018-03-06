@extends('layouts.app') 

@section('content')

<section class="banner-sec">
    <div class="container">
        <div class="row text-center">
            <div class="welcome-msg">
                <div class="heading-large">Welcome <span class="logged-in-user">{{Auth::user()->name}} </span>!</div>
            </div>
        </div>
    </div>
</section>
<section class="section-01">
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2 col-sm-12">
                <div class="upload-options">
                    <div class="row">
                        <div class="col-md-6 com-sm-12">
                            <div class="upload-method">
                                <i class="fa fa-upload fa-w-16 fa-7x"></i>
                                <div class="extra-group">
                                    <h1>Upload From Computer</h1>
                                    <hr />
                                    <p>Upload Image File Directly through your browser.</p>
                                </div>
                                <div class="upload-action-button">
                                    <a href="{{route('user.create-post')}}" class="button">Upload now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 com-sm-12">
                            <div class="upload-method">
                                <i class="fa fa-folder fa-w-16 fa-7x"></i>
                                <div class="extra-group">
                                    <h1>FTP</h1>
                                    <hr />
                                    <p>Good for uploading image in bulk.</p>
                                </div>
                                <div class="upload-action-button">
                                    <a href="#" class="button">Get Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
<section class="section-02">
    <div class="container">
        <div class="row">
            <div class="need-help">
                <img src="{{asset('img/support.png')}}" style="object-fit: cover; height: 90px;width: 90px; border-radius: 90px"/>
                <h2>Need Help?</h2>
                <p>Hi, my name is Juthi, me and our expert team 24 hour here for you..</p>
                <span><a href="mailto:info@clippingserviceprovider.com?Subject=Need%20help"> <i class="fa fa-at"></i> </a></span>
                <span><a href="skype:live:cdb0e96083cfd148?call"><i class="fa fa-skype"></i> </a> </span>
            </div>
        </div>
    </div>
</section>
@endsection