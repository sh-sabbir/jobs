@extends('layouts.app-admin')

@section('content')

    @include('partials.sidebar')

    <div class="main-panel" style="padding-top:20px; min-height:90vh">
        <div class="container">
            <div class="col-md-10">
                <h2>File Format</h2>
                {!! Form::open(['method'=>'POST', 'action'=> 'PostFormatController@store']) !!}
                    <div class="form-group" style="display: inline-block; width:320px;">
                        {!! Form::label('format', 'File Type:') !!}
                        {!! Form::text('format', null, ['class'=>'form-control'])!!}
                    </div>

                    <div class="form-group" style="display: inline-block;">
                        {!! Form::submit('Add New', ['class'=>'btn btn-primary']) !!}
                    </div>
                {!! Form::close() !!}

            </div>

            <div class="col-md-10">
                <div class="card">
                    <div class="content">

                        @if($formats)

                        <table class="table">
                            <thead>
                            <tr>
                                <th>File Type</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
    
                            @foreach($formats as $format)
    
                                <tr>
                                    <td>{{$format->format}}</td>
                                    <td>
                                    {!! Form::open(['method'=>'DELETE', 'action'=> ['PostFormatController@destroy', $format->id]]) !!}
                                    <div class="form-group">
                                        {!! Form::submit('Delete', ['class'=>'btn btn-danger']) !!}
                                    </div>
                                    {!! Form::close() !!}
                                    </td>
                                </tr>
                            @endforeach
    
                            </tbody>
                        </table>
    
                        @endif

                    </div>
                </div>
            </div>
        </div>
    </div>


@stop