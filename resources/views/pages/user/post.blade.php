@extends('layouts.app') @section('content')

<section class="banner-sec">
    <div class="container">
        <div class="row text-center">
            <div class="welcome-msg">
                <div class="heading-large">Status of your <span class="logged-in-user">Job !</span></div>
            </div>
        </div>
    </div>
</section>

<section class="section-jobList">

    <div class="container" style="min-height: 90vh;">
        <div class="content">

            <div class="card w-75">
              <ul class="list-group list-group-flush">
                @if($posts) 
                    @forelse($posts as $post)
                        <div class="list-group-item job-items">
                            <div class="job-title">
                                <div class="row">
                                    <div class="col-md-8">
                                        <a href="{{route('user.index-post', $post->id)}}">{{$post->title}}</a>
                                    </div>
                                    <div class="col-md-4">
                                        <span class="job-time">{{$post->created_at->diffforhumans()}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="job-details">
                                <p>{{$post->description}}</p>
                            </div>
                            <div class="job-footer">
                                <div class="requirements">
                                    <span class="req-item">{{$post->price->price}}</span>
                                    <span class="req-item">{{$post->duration->duration}}</span>
                                    <span class="req-item">{{$fileTypes[$post->type_id]}}</span>
                                    <?php //var_dump($post->type_id);?>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 job-status">
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
                                        <a class="btn btn-default btn-circle" title="View Details" data-toggle="tooltip" data-placement="top" href="{{route('user.index-post', $post->id)}}">
                                            <i class="fa fa-eye"></i>
                                        </a>

                                        @if($post->status === null)
                                            <a class="btn btn-default btn-circle" title="Edit Job" data-toggle="tooltip" data-placement="top" href="{{route('user.edit-post', $post->id)}}">
                                                <i class="fa fa-pencil"></i>
                                            </a>
                                        @endif  

                                    </div>
                                </div>
                            </div>
                        </div>
                    @empty
                        <div class="list-group-item job-items">
                            You don't have any Job history. Try creating <a href="{{route('user.create-post')}}" style="color: #18d1ac">one.</a>
                        </div>
                    @endforelse
                    
                @endif
              </ul>
            </div>

        </div>

    </div>

</section>


@endsection