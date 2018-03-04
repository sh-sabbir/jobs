@extends('layouts.app') 

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header alert-success">USER Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                    <div class="alert alert-success">
                        {{ session('status') }}
                    </div>
                    @endif You are logged in as USER!
                </div>
            </div>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-md-4 py-4">
            <a href="{{route('user.create-post')}}" style="text-decoration : none; color:black">
                <div class="card">
                    <div class="card-header">
                        <h4>Create new</h4>
                    </div>
                    <div class="card-body">
                        <p>Create a new job post</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-4 py-4">
            <a href="{{route('user.posts', auth()->user()->id)}}" style="text-decoration : none; color:black">
                <div class="card">
                    <div class="card-header">
                        <h4>View Job</h4>
                    </div>
                    <div class="card-body">
                        <p>View submitted job posts</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-4 py-4">
            <a href=" {{--{{route('user.create-post')}}--}}  " style="text-decoration : none; color:black">
                <div class="card">
                    <div class="card-header">
                        <h4>Finished Job</h4>
                    </div>
                    <div class="card-body">
                        <p>Completed job posts</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>
@endsection