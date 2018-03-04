<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Validator;

class AdminLoginController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('guest:admin')->except('logout');
    }

    public function showLoginForm()
    {
        return view('auth.login-admin');
    }


    public function submitLogin(Request $request)
    {


        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        // $validator = Validator::make($request->all(), [
        //     'email' => 'required|email',
        //     'password' => 'required|string',
        // ]);

        if(Auth::guard('admin')->attempt(['email' => $request->email, 'password' => $request->password], $request->remember)){
            
            return redirect()->intended(route('admin.dashboard'));

        };
        return redirect()->back()->withInput($request->only('email', 'remember'))->withErrors(['Incorrect Email or Password, Please check your email/password again']);
    }


    public function logout()
    {
        Auth::guard('admin')->logout();

        return redirect('/');
    }

}
