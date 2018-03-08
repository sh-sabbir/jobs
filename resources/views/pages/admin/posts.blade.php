@extends('layouts.app-admin') 

@section('content') 

    @include('partials.sidebar')

    <div class="main-panel" style="padding-top:20px; min-height: 90vh">
        <div style="padding: 20px;">
            <div class="col-md-10">
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
                                        @if($post->status === null)
                                            <strong>Pending</strong>
                                        @elseif($post->status === 1)
                                            <strong>Admin Approved</strong>
                                        @elseif($post->status === 2)
                                            <strong>Working</strong>
                                        @elseif($post->status === 3)
                                            <strong>Submitted</strong>
                                        @elseif($post->status === 4)
                                            <strong>Complete</strong>
                                        @elseif($post->status === 5)
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