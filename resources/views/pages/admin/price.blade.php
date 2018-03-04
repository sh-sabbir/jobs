@extends('layouts.app-admin')

@section('content')

    @include('partials.sidebar')

    <div class="main-panel" style="padding-top:20px; min-height:90vh">
        <div class="container">
            <div class="col-sm-6">
                <h1>Price Range</h1>
                {!! Form::open(['method'=>'POST', 'action'=> 'PostPriceController@store']) !!}
                    <div class="form-group">
                        {!! Form::label('price', 'Price Range:') !!}
                        {!! Form::text('price', null, ['class'=>'form-control'])!!}
                    </div>

                    <div class="form-group">
                        {!! Form::submit('Create price', ['class'=>'btn btn-primary']) !!}
                    </div>
                {!! Form::close() !!}

            </div>

            <div class="col-sm-6">
                <div class="card">
                    <div class="content">

                        @if($prices)

                        <table class="table">
                            <thead>
                            <tr>
                                <th>Price Group</th>
                                <th>Delete</th>
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