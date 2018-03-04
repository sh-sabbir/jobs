<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Mail\verifyEmail;
// use App\Notifications\VerifyEmail;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        $user=  User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'verify_token' => str_random(25),
        ]);
        
        $thisUser = User::findOrFail($user->id);

        $this->sendEmail($thisUser);
    

        return $user;
    }


    public function sendEmail($thisUser)
    {
        Mail::to($thisUser['email'])->send(new verifyEmail($thisUser));
    }


    public function emailSent($email, $verify_token)
    {
        $user = User::where(['email'=>$email,'verify_token'=>$verify_token])->first();

        if($user)
        {
            User::where(['email'=>$email,'verify_token'=>$verify_token])->update(['is_active'=>true,'verify_token'=>null]);

            return redirect(route('login'));
        }
        else 
            return redirect(route('login'));
    }


    public function verifyEmail(){
        return view('email.verifyEmail');
    }
}
