@extends('layouts.app') 

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8 ">
            <div class="card ">
                <div class="card-header alert-success text-center">
                    <h1>Home</h1>
                </div>
                <div class="card-body text-center">
                    @if (session('status'))
                    <div class="alert alert-success">
                        {{ session('status') }}
                    </div>
                    @endif You are logged in!
                </div>
            </div>
        </div>
    </div>

    <div class="row justify-content-center text-center">
        <div class="col-md-6 py-4">
            <a href="{{route('user.dashboard')}}" style="text-decoration : none; color:black">
                <div class="card">
                    <div class="card-header">
                        <h4>Upload From Computer</h4>
                    </div>
                    <div class="card-body">
                        <p>Upload files form local machine</p>
                        <button class="btn btn-lg btn-success">Click here</button>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 py-4">
            <a href="{{route('user.create-post')}}" style="text-decoration : none; color:black">
                <div class="card">
                    <div class="card-header">
                        <h4>FTP</h4>
                    </div>
                    <div class="card-body">
                        <p>Upload files form ftp server</p>
                        <button class="btn btn-lg btn-success">Click here</button>
                    </div>
                </div>
            </a>
        </div>

    </div>
</div>
@endsection