@extends('layouts.app-admin')

@section('content')

    @include('partials.sidebar')

    <div class="main-panel" style="padding-top:20px; min-height:90vh">
        <div class="container">
            <div class="col-md-10">
                <h1>Available Services</h1>
                {!! Form::open(['method'=>'POST', 'action'=> 'PostPriceController@store']) !!}
                    <div class="form-group" style="display: inline-block; width:320px;">
                        {!! Form::label('price', 'Service Name:') !!}
                        {!! Form::text('price', null, ['class'=>'form-control','required'])!!}
                    </div>

                    <div class="form-group" style="display: inline-block;">
                        {!! Form::submit('Add New', ['class'=>'btn btn-primary']) !!}
                    </div>
                {!! Form::close() !!}

            </div>

            <div class="col-md-10">
                <div class="card">
                    <div class="content">

                        @if($prices)

                        <table class="table">
                            <thead>
                            <tr>
                                <th>Price Group</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
    
                            @foreach($prices as $price)
    
                                <tr>
                                    <td>{{$price->price}}</td>
                                    <td>
                                    {!! Form::open(['method'=>'DELETE', 'action'=> ['PostPriceController@destroy', $price->id]]) !!}
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