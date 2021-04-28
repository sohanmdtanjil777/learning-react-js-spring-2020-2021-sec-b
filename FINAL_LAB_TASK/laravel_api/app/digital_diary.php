<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class digital_diary extends Model
{
    protected $table = 'person_diary';
    public $timestamps = true;
    protected $primaryKey = 'id';
}
