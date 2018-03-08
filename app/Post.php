<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Attachment;

class Post extends Model
{
    //
    protected $fillable = [
        'title', 'description', 'file_id', 'price_id', 'duration_id', 'type_id', 'admin_price'
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function file(){
        return $this->belongsTo('App\File');
    }


    public function price(){
        return $this->belongsTo('App\Price');
    }


    public function duration(){
        return $this->belongsTo('App\Serviceduration');
    }


    public function format(){
        return $this->belongsTo('App\Filetype','id');
    }

    public function attachments()
    {
        return $this->morphMany(Attachment::class, 'attachable');
    }
}
