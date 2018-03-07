@extends('layouts.app')

@section('content')

    <div class="container">
        <div style="min-height: 95vmin;">
            <div class="col-md-4 pull-left">
                <div class="image my-5">
                    <img class="img img-responsive" src="images/{{Auth::user()->photo ? Auth::user()->photo->photo_file : 'http://placehold.it/200x200'}}" alt="" style="max-width: 100%">
                </div>
            </div>
            <div class="col-md-8 pull-right">
                <div class="card my-5">
                    <div class="card-header">
                        <h3> Profile </h3>
                    </div>
                    <div class="card-body">
                        <p> Name: {{Auth::user()->name}} </p>
                        <hr>
                        <p> Email: {{Auth::user()->email}} </p>
                        <hr>
                        <p> Contact Number: {{Auth::user()->contact_number}} </p>
                        <hr>
                        <a href=" {{route('profile.edit', Auth::user()->id)}} ">
                            <div class="btn btn-primary">
                                Edit profile
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection