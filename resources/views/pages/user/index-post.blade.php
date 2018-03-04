@extends('layouts.app')

@section('content')
    
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h3> {{$post->title}} </h3>
                    </div>
                    <div class="card-body">
                        <p> {{$post->description}} </p>
                        <hr>
                        <p> Price: {{$post->price->price}} </p>
                        <hr>
                        <p> Time: {{$post->duration->duration}} </p>
                        <hr>
                        <p> {{$post->file ? $post->file->path : 'No attachment available' }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection