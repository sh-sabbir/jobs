@extends('layouts.app')

@section('content')
<section class="banner-sec">
    <div class="container">
        <div class="row text-center">
            <div class="welcome-msg">
                <div class="heading-large">Job <span class="logged-in-user">Details !</span></div>
            </div>
        </div>
    </div>
</section>

<div class="container" style="min-height: 90vh">
    <div>
        <div class="col-md-12">
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
                    <hr>
                    @if($post->status === 1)
                    {!! Form::model($post, ['method'=>'PATCH', 'action'=> ['PostController@userApprovePost', $post->id]]) !!}
                    <div class="form-group">
                        {!! Form::label('admin_price', 'Admin Price :') !!}
                        {!! Form::text('admin_price', null, ['class'=>'form-control' ,'readonly' => 'true']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::submit('Confirm Job', ['class'=>'btn btn-success']) !!}
                    </div>
                    @elseif($post->status === 2)
                    {!! Form::model($post, ['method'=>'PATCH', 'action'=> ['PostController@userSubmitPost', $post->id]]) !!}
                    <div class="form-group">
                        {!! Form::submit('Submit Job', ['class'=>'btn btn-success']) !!}
                    </div>
                    @endif
                    {!! Form::close() !!}
                </div>
            </div>

            <div class="card w-75">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Button</a>
              </div>
            </div>
        </div>
    </div>
</div>

@endsection