<?php

namespace App;

use App\Notifications\VerifyEmail;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'verify_token', 'photo_id', 'contact_number'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */

    protected $hidden = [
        'password', 'remember_token',
    ];


    public function posts(){
        return $this->hasMany('App\Post');
    }

    public function photo(){

        return $this->belongsTo('App\Photo');

    }

    // public function file()
    // {
    //     return $this->belongsTo('App\File');
    // }

    public function verified(){
        return $this->token === null;
    }


    public function sendVerificationEmail()
    {
        $this->notify(new VerifyEmail($user));
    }
}
