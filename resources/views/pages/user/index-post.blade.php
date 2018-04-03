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
    <section class="section-jobList">
        <div class="col-md-12">
            <div class="card">

                <div class="list-group-item job-items">
                    <div class="job-title">
                        <div class="row">
                            <div class="col-md-8">
                                <h1 style="font-size: 18px;margin:  0;">{{$post->title}}</h1>
                            </div>
                            <div class="col-md-4">
                                <span class="job-time">{{$post->created_at->diffforhumans()}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="job-footer">
                        <div class="row">
                            <div class="col-md-6 job-status">
                                <div class="requirements">
                                    <span class="req-item">{{$post->price->price}}</span>
                                    <span class="req-item">{{$post->duration->duration}}</span>
                                    <span class="req-item">{{$fileTypes[$post->type_id]}}</span>
                                </div>

                                @if($post->status === null)
                                    Status: <strong>Pending</strong>
                                @elseif($post->status === 1)
                                    Status: <strong>Admin Approved</strong>
                                @elseif($post->status === 2)
                                    Status: <strong>Working</strong>
                                @elseif($post->status === 3)
                                    Status: <strong>Submitted</strong>
                                @elseif($post->status === 4)
                                    Status: <strong>Complete</strong>
                                @elseif($post->status === 5)
                                    Status: <strong>Rejected</strong>
                                @endif
                            </div>
                            <div class="col-md-6">
                                @if($post->status === null)
                                    <a class="btn btn-default btn-circle" href="{{route('user.edit-post', $post->id)}}" style="height: auto; width:  auto; padding: 5px 10px; margin: 10px 0px;">
                                        <i class="fa fa-pencil"></i> Edit Job
                                    </a>
                                @endif  

                            </div>
                        </div>
                    </div>

                    <div class="job-details">
                        <span style="font-size: 13px;font-weight:bold; color:#16D1AC; width: 100%; border-bottom:1px solid #e2e2e2; display:block; margin-bottom: 10px;">Description:</span>
                        <p>{{$post->description}}</p>
                    </div>
                </div>

                <div class="card-header">
                    <span style="font-weight: bold;">Attachment:</span>
                    @if($post->file)
                    <a style="text-decoration: none !important; color: #18d1ac;" download="jobfile-{{$post->file->path}}" href="{{asset('images/'.$post->file->path)}}" title="Job Attachment">
                        {{$post->file->path}}
                    </a>
                    @else
                    {{'No attachment available'}}
                    @endif
                </div>
                
                    @if($post->status === 1)
                    {!! Form::model($post, ['method'=>'PATCH', 'action'=> ['PostController@userApprovePost', $post->id]]) !!}
                    <div class="card-body">
                        <div class="form-group">
                            {!! Form::label('admin_price', 'Admin Price :') !!}
                            {!! Form::text('admin_price', null, ['class'=>'form-control' ,'readonly' => 'true']) !!}
                        </div>
                        <div class="form-group">
                            {!! Form::submit('Confirm Job', ['class'=>'btn btn-success']) !!}
                        </div>
                    </div>
                    @elseif($post->status === 2)
                    {!! Form::model($post, ['method'=>'PATCH', 'action'=> ['PostController@userSubmitPost', $post->id]]) !!}
                    <div class="card-body">
                        <div class="form-group">
                            {!! Form::submit('Submit Job', ['class'=>'btn btn-success']) !!}
                        </div>
                    </div>
                    @endif
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </section>
</div>

@endsection