@extends('layouts.app') @section('content')

<div class="container">

    <div class="row justify-content-center">
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
                            @if($post->is_active === 1)
                                Not Editale
                            @else
                                <a href=" {{route('user.edit-post', $post->id)}} "><i class="far fa-edit"></i></a>
                            @endif 
                        </td>
                        {{--  <td> <a href="{{$post->file ? $post->file->path : '' }}"> {{$post->file->path}} </a> </td>  --}}
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

                    @endforeach 
                    
                    @endif

                </tbody>
            </table>


        </div>

    </div>

</div>


@endsection