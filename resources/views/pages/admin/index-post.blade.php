@extends('layouts.app-admin')

@section('content')

    @include('partials.sidebar')

    <div class="main-panel" style="padding-top:20px; min-height: 90vh">
        <div style="padding: 20px;">
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
                            <p> Time: {{$post->duration->duration}} </p>
                            <hr>
                            <p> {{$post->file ? $post->file->path : 'No attachment available' }} </p>
                            <hr>
                        </div>
                        <div class="content">
                            @if($post->status === null)
                            {!! Form::model($post, ['method'=>'PATCH', 'action'=> ['AdminController@postApprove', $post->id]]) !!}
                            <div class="form-group">
                                {!! Form::label('admin_price', 'Set Price: ') !!}
                                {!! Form::text('admin_price', null, ['class'=>'form-control']) !!}
                                <hr>
                                {!! Form::submit('Approve Post', ['class'=>'btn btn-success']) !!}
                            </div>
                            {!! Form::close() !!}
        
                            {!! Form::model($post, ['method'=>'PATCH', 'action'=> ['AdminController@postDisapprove', $post->id]]) !!}
                            <div class="form-group">
                                {!! Form::submit('Disapprove Post', ['class'=>'btn btn-danger']) !!}
                            </div>
                            {!! Form::close() !!}

                            @elseif($post->status === 3)
                            {!! Form::model($post, ['method'=>'PATCH', 'action'=> ['AdminController@postSubmitted', $post->id]]) !!}
                            <div class="form-group">
                                {!! Form::submit('Confirm Post', ['class'=>'btn btn-success']) !!}
                            </div>
                            {!! Form::close() !!}
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection