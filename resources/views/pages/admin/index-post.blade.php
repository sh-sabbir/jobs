@extends('layouts.app-admin')

@section('content')

    @include('partials.sidebar')

    <div class="main-panel" style="padding-top:20px;">
        <div class="container">
            <div class="row justify-content-center" style="display: flex; justify-content: space-between;">
                <div class="col-md-8">
                    <div class="card">
                        <div class="content">
                            <h3> {{$post->title}} </h3>
                        </div>
                        <div class="content">
                            <p> {{$post->description}} </p>
                            <hr>
                            <p> Price: {{$post->price->price}} </p>
                            <hr>
                            <p> Time: {{$post->duration->duration}} </p>
                            <hr>
                            <p> {{$post->file ? $post->file->path : 'No attachment available' }} </p>
                        </div>
                        <div class="content">
                            {{--  <a href=""><button type="submit" class="btn btn-success">Approve</button></a>
                            <button type="submit" class="btn btn-danger">Disapprove</button>  --}}
                            {!! Form::model($post, ['method'=>'PATCH', 'action'=> ['AdminController@postApprove', $post->id]]) !!}
                            <div class="form-group">
                                {!! Form::submit('Approve Post', ['class'=>'btn btn-success']) !!}
                            </div>
                            {!! Form::close() !!}
        
                            {!! Form::model($post, ['method'=>'PATCH', 'action'=> ['AdminController@postDisapprove', $post->id]]) !!}
                            <div class="form-group">
                                {!! Form::submit('Disapprove Post', ['class'=>'btn btn-danger']) !!}
                            </div>
                            {!! Form::close() !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection