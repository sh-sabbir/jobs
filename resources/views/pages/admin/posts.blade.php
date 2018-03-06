@extends('layouts.app-admin') 

@section('content') 

    @include('partials.sidebar')

    <div class="main-panel" style="padding-top:20px;">
        <div class="container">
            <div class="col-md-11">
                <div class="card">
                    <div class="content table-responsive table-full-width">
                        <table class="table table-striped">
                            <thead>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Job Title</th>
                                <th>Email</th>
                                <th>Created at</th>
                                <th>Status</th>
                            </thead>
                            <tbody>

                                @if($posts) @foreach($posts as $post)

                                <tr>
                                    <td> {{$post->id}} </td>
                                    <td> {{$post->user->name}} </td>
                                    <td> <a href=" {{route('admin.index-post', $post->id)}} "> {{$post->title}} </a></td>
                                    <td> {{$post->user->email}} </td>
                                    <td> {{$post->created_at->diffforhumans()}} </td>
                                    <td> 
                                        @if($post->is_active === 0)
                                            <strong>Pending</strong>     
                                        @elseif($post->is_active === 1)
                                            <strong>Approved</strong> 
                                        @elseif($post->is_active === 2)
                                            <strong>Rejected</strong> 
                                        @endif 
                                    </td>
                                </tr>

                                @endforeach @endif

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection