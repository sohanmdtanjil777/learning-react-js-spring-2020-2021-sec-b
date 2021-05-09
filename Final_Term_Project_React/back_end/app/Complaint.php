<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Complaint extends Model
{

  protected $fillable = [
      'complaint_by', 'complaint_name', 'complaint_details',
  ];
    protected $primaryKey = 'complaint_id';
}
