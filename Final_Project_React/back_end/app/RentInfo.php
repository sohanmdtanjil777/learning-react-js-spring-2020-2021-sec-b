<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RentInfo extends Model
{
    protected $table = 'rent_info';
    public $timestamps = true;
    protected $primaryKey = 'rent_no';
}
