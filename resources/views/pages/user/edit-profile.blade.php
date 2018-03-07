@extends('layouts.app')

@section('content')

    <div class="container">
        <div style="min-height: 95vmin;">
            <div class="col-sm-12">
                <div class="card my-5">
                    <div class="card-header">
                        <h3> Edit Profile </h3>
                    </div>
                    <div class="card-body">
                        {!! Form::model($user, ['method'=>'PATCH', 'action'=> ['ProfileController@update', $user->id], 'files'=>true]) !!}
                        <div class="form-group">
                            {!! Form::label('name', 'Name:') !!}
                            {!! Form::text('name', null, ['class'=>'form-control']) !!}
                        </div>
                        <div class="form-group">
                            {!! Form::label('number', 'Number:') !!}
                            {!! Form::text('number', null, ['class'=>'form-control']) !!}
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