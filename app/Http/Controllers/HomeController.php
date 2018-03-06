<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }


    public function dashboard()
    {
        return view('pages.user.home');
    }

    function active_class_path($paths, $classes = null)
    {
        foreach ((array) $paths as $path) {
            if (request()->is($path)) {
                return 'class="' . ($classes ? $classes . ' ' : '') . 'active"';
            }
        }
        return $classes ? 'class="' . $classes . '"' : '';
    }
}
