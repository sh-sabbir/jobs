<?php

namespace App\Http\Controllers;

use App\Post;
use App\File;
use App\User;
use App\Price;
use App\Filetype;
use App\Serviceduration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\PostCreateRequest;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        $this->middleware('auth');
    }


    public function index()
    {
        //$user = User::findOrFail($id);
        $user = Auth::user()->id;
        
        $posts = Post::where("user_id", "=", $user)->orderBy('created_at', 'desc')->get();

        $prices = Price::pluck('price','id')->all();

        $durations = Serviceduration::pluck('duration', 'id')->all();

        $fileTypes = Filetype::pluck('format', 'id')->all();

        // $user = User::;

        return view('pages.user.post', compact('posts','prices', 'durations','fileTypes'));
        // return view('pages.user.post');
    }


    // public function showUserPost($id)
    // {   
    //     $user = User::findOrFail($id);

    //     $posts = $user->posts()->all();

    //     return view('pages.user.post', compact('user','posts'));
    // }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $prices = Price::pluck('price','id')->all();

        $durations = Serviceduration::pluck('duration', 'id')->all();

        $fileTypes = Filetype::pluck('format', 'id')->all();

        return view('pages.user.create-post', compact('prices', 'durations','fileTypes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostCreateRequest $request)
    {
        //
        $input = $request->all();


        $user = Auth::user();


        if($file = $request->file('file_id')){

            $name = time() . $file->getClientOriginalName();


            $file->move('images', $name);

            $asset = File::create(['path'=>$name]);


            $input['file_id'] = $asset->id;

        }


        $user->posts()->create($input);

        return redirect(route('user.my-jobs'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $post = Post::findOrFail($id);

        $fileTypes = Filetype::pluck('format', 'id')->all();

        return view('pages.user.index-post', compact('post','fileTypes'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $post = Post::findOrFail($id);

        $prices = Price::pluck('price','id')->all();

        $durations = Serviceduration::pluck('duration', 'id')->all();

        $fileTypes = Filetype::pluck('format', 'id')->all();

        return view('pages.user.edit-post', compact('post','prices','durations','fileTypes'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $input = $request->all();

        if($file = $request->file('file_id')){


            $name = time() . $file->getClientOriginalName();


            $file->move('images', $name);


            $asset = File::create(['file'=>$name]);


            $input['photo_id'] = $asset->id;

        }


        Auth::user()->posts()->whereId($id)->first()->update($input);


        return redirect(route('home'));
    }


    public function userApprovePost($id)
    {
        $post = Post::where('id', '=', $id)->first();
        if($post)
        {
            $post->status= 2;
            $post->save();
            return redirect('/user/my-jobs');
        }
    }


    public function userSubmitPost($id)
    {
        $post = Post::where('id', '=', $id)->first();
        if($post)
        {
            $post->status= 3;
            $post->save();
            return redirect('/user/my-jobs');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        //

        $post = Post::findOrFail($id);

        if($file= $request->file('file_id'))
        {

            unlink(public_path() . $post->file->path);

        }

        $post->delete();

        return redirect(route('user.dashboard'));


    }
}
