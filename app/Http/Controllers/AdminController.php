<?php

namespace App\Http\Controllers;

use App\User;
use App\Post;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    /**
     * Show the post dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin');
    }


    public function showUsers()
    {

        $users = User::all();

        return view('pages.admin.users', compact('users'));
    }

    
    public function showUserJobs()
    {
        $posts = Post::all();

        return view('pages.admin.posts', compact('posts'));
    }

    public function show($id)
    {
        //
        $post = Post::findOrFail($id);

        return view('pages.admin.index-post', compact('post'));
    }


    public function postApprove($id) 
    {
        $post = Post::where('id', '=', $id)->first();
        if($post)
        {
            $post->is_active = 1;
            $post->save();
            
            return redirect('/admin/jobs');
        }
    }


    public function postDisapprove($id) 
    {
        $post = Post::where('id', '=', $id)->first();
        if($post)
        {
            $post->is_active = 2;
            $post->save();
            
            return redirect('/admin/jobs');
        }
    }

}
