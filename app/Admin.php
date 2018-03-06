<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use App\Notifications\AdminResetPasswordNotification;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Admin extends Authenticatable
{
    use Notifiable;

    protected $guard = 'admin';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    public function sendPasswordResetNotification($token)
    {
        $this->notify(new AdminResetPasswordNotification($token));
    }

    function admin_active_class_path($paths, $classes = null)
    {
        foreach ((array) $paths as $path) {
            if (request()->is($path)) {
                return 'class="' . ($classes ? $classes . ' ' : '') . 'active"';
            }
        }
        return $classes ? 'class="' . $classes . '"' : '';
    }

}
