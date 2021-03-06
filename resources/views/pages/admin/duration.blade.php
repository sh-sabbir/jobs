@extends('layouts.app-admin')

@section('content')

    @include('partials.sidebar')

    <div class="main-panel" style="padding-top:20px; min-height:90vh">
        <div style="padding: 20px;">
            <div class="col-md-10">
                <h2>Time Duration</h2>
                {!! Form::open(['method'=>'POST', 'action'=> 'PostDurationController@store']) !!}
                    <div class="form-group" style="display: inline-block; width:320px;">
                        {!! Form::label('duration', 'Time Range:') !!}
                        {!! Form::text('duration', null, ['class'=>'form-control'])!!}
                    </div>

                    <div class="form-group" style="display: inline-block;">
                        {!! Form::submit('Add New', ['class'=>'btn btn-primary']) !!}
                    </div>
                {!! Form::close() !!}

            </div>

            <div class="col-md-10">
                <div class="card">
                    <div class="content">

                        @if($durations)

                        <table class="table">
                            <thead>
                            <tr>
                                <th>Time Group</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
    
                            @foreach($durations as $duration)
    
                                <tr>
                                    <td>{{$duration->duration}}</td>
                                    <td>
                                    {!! Form::open(['method'=>'DELETE', 'action'=> ['PostDurationController@destroy', $duration->id]]) !!}
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