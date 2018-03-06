@extends('layouts.app') 

@section('content')

<section class="banner-sec">
    <div class="container">
        <div class="row text-center">
            <div class="welcome-msg">
                <div class="heading-large">Create a new <span class="logged-in-user">Job !</span></div>
            </div>
        </div>
    </div>
</section>

<section class="create-job">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                {!! Form::open(['method' => 'POST', 'action' => 'PostController@store', 'files' => 'ture']) !!}
                <div class="form-group">
                    {!! Form::label('title', 'Job Title *') !!} 
                    {!! Form::text('title', null, ['class'=>'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('description', 'Instruction *') !!} 
                    {!! Form::textarea('description', null, ['class'=>'form-control', 'rows'=>5]) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('price_id', 'Service *') !!}
                    {!! Form::select('price_id', [''=>'Select a service'] + $prices, null, ['class'=>'form-control'])!!}
                </div>
                <div class="form-group">
                    {!! Form::label('duration_id', 'Delivery Time *') !!}
                    {!! Form::select('duration_id', [''=>'Select an option'] + $durations, null, ['class'=>'form-control'])!!}
                </div>
                <div class="form-group">
                    {!! Form::label('type_id', 'Return Format *') !!}
                    {!! Form::select('type_id', [''=>'Select an option'] + $fileTypes, null, ['class'=>'form-control'])!!}
                </div>
                <div class="form-group">
                    
                    {!! Form::file('file_id', ['class'=>'form-control-file']) !!}
                </div>
                <div class="form-group">
                    {!! Form::submit('Create Post',['class'=>'btn btn-primary']) !!}
                </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>
</section>


@endsection