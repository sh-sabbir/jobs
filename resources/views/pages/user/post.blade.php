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

<div class="container">

    <div class=" ">
        <div class="content table-responsive table-full-width">
            <table class="table table-striped">
                <thead>
                    <th>User</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Created at</th>
                    <th>Edit</th>
                    <th>Status</th>
                </thead>
                <tbody>

                    @if($posts) 
                    
                    @foreach($posts as $post)

                    <tr>
                        <td> {{$post->user->name}} </td>
                        <td> <a href=" {{route('user.index-post', $post->id)}} ">{{$post->title}}</a> </td>
                        <td> {{$post->description}} </td>
                        <td> {{$post->created_at->diffforhumans()}} </td>
                        <td> 
                            @if($post->status === null)
                                <a href=" {{route('user.edit-post', $post->id)}} "><i class="far fa-edit"></i></a>
                            @else
                                Not Editable
                            @endif 
                        </td>
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

                    @endforeach 
                    
                    @endif

                </tbody>
            </table>


        </div>

    </div>

</div>


@endsection