@extends('layouts.app')

@section('content')
<section class="banner-sec">
    <div class="container">
        <div class="row text-center">
            <div class="welcome-msg">
                <div class="heading-large">Edit your <span class="logged-in-user">Profile !</span></div>
            </div>
        </div>
    </div>
</section>
    <div class="container">
        <div style="min-height: 95vmin;">
            <div class="col-md-10 offset-md-1 col-sm-12">
                <div class="card my-5">
                
                    <div class="card-body">
                        {!! Form::model($user, ['method'=>'PATCH', 'action'=> ['ProfileController@update', $user->id], 'files'=>true]) !!}
                        <div class="form-group">
                            {!! Form::label('name', 'Name:') !!}
                            {!! Form::text('name', null, ['class'=>'form-control']) !!}
                        </div>
                        <div class="form-group">
                            {!! Form::label('contact_number', 'Number:') !!}
                            {!! Form::text('contact_number', null, ['class'=>'form-control']) !!}
                        </div>
                        <div class="form-group">
                            {!! Form::label('photo_id', 'Attachments:') !!}
                            {!! Form::file('photo_id', ['class'=>'form-control-file']) !!}
                        </div>
                        <hr>
                        <div class="form-group">
                            {!! Form::submit('Update Profile', ['class'=>'btn btn-primary']) !!}
                        </div>
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection