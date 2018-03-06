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
                                <th>Email</th>
                                <th>Created at</th>
                                <th>Status</th>
                            </thead>
                            <tbody>

                                @if($users) @foreach($users as $user)

                                <tr>
                                    <td> {{$user->id}} </td>
                                    <td> {{$user->name}} </td>
                                    <td> {{$user->email}} </td>
                                    <td> {{$user->created_at->diffforhumans()}} </td>
                                    <td> {{$user->is_active ? 'Active' : 'Not Active'}} </td>
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