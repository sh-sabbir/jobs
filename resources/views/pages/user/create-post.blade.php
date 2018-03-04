@extends('layouts.app') 

@section('content')

    <div class="container">
        <h1>Create Job Post</h1>
        <hr>
        <div class="row justify-content-center">
            <div class="col-md-8">
                {!! Form::open(['method' => 'POST', 'action' => 'PostController@store', 'files' => 'ture']) !!}
                <div class="form-group">
                    {!! Form::label('title', 'Title:') !!} 
                    {!! Form::text('title', null, ['class'=>'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('description', 'Description:') !!} 
                    {!! Form::textarea('description', null, ['class'=>'form-control', 'rows'=>5]) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('price_id', 'Set Price Range:') !!}
                    {!! Form::select('price_id', [''=>'Choose Price Group'] + $prices, null, ['class'=>'form-control'])!!}
                </div>
                <div class="form-group">
                    {!! Form::label('duration_id', 'Set Time:') !!}
                    {!! Form::select('duration_id', [''=>'Choose Time Group'] + $durations, null, ['class'=>'form-control'])!!}
                </div>
                <div class="form-group">
                    {!! Form::label('type_id', 'Set File Format:') !!}
                    {!! Form::select('type_id', [''=>'Choose File Format'] + $fileTypes, null, ['class'=>'form-control'])!!}
                </div>
                <div class="form-group">
                    {!! Form::label('file_id', 'Attachments:') !!} 
                    {!! Form::file('file_id', ['class'=>'form-control-file']) !!}
                </div>
                <div class="form-group">
                    {!! Form::submit('Create Post',['class'=>'btn btn-primary']) !!}
                </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>


@endsection