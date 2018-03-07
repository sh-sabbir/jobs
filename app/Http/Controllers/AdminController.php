<?php

namespace App\Http\Controllers;

use App\User;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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


    public function showChangePasswordForm(){
        return view('pages.admin.change-password');
    }


    public function changePassword(Request $request){

        if (!(Hash::check($request->get('current-password'), Auth::user()->password))) {
            // The passwords matches
            return redirect()->back()->with("error","Your current password does not matches with the password you provided. Please try again.");
        }

        if(strcmp($request->get('current-password'), $request->get('new-password')) == 0){
            //Current password and new password are same
            return redirect()->back()->with("error","New Password cannot be same as your current password. Please choose a different password.");
        }

        $validatedData = $request->validate([
            'current-password' => 'required',
            'new-password' => 'required|string|min:6|confirmed',
        ]);

        //Change Password
        $admin = Auth::user();
        $admin->password = bcrypt($request->get('new-password'));
        $admin->save();

        return redirect()->back()->with("success","Password changed successfully !");

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


    public function postApprove(Request $request, $id)
    {
        $input = $request->all();

        $post = Post::where('id', '=', $id)->first();

        if($post)
        {
            $post->status = 1;
            $post->update($input);
            $post->save();
            
            return redirect('/admin/jobs');
        }
    }


    public function postSubmitted($id)
    {
        $post = Post::where('id', '=', $id)->first();
        if($post)
        {
            $post->status= 4;
            $post->save();

            return redirect('/admin/jobs');
        }
    }


    public function postDisapprove($id) 
    {
        $post = Post::where('id', '=', $id)->first();
        if($post)
        {
            $post->status= 5;
            $post->save();
            
            return redirect('/admin/jobs');
        }
    }

}
