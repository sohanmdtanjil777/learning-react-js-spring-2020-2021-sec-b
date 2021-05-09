<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReactReg extends Model
{
	protected $fillable = [

         'full_name', 'user_name', 'email', 'image', 'password', 'dob', 'gender', 'blood_type', 'nid', 'contact', 'user_type',
	];
    protected $table = 'users';
    public $timestamps = true;
    protected $primaryKey = 'id';
}
