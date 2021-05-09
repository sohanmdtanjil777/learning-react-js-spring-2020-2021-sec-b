<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ReactReg;
use App\RentInfo;

class ReactRegisterController extends Controller
{
    public function insert_new_user(Request $request){


        //$name = $request->full_name;

        //return $request->user;

        return ReactReg::create($request->all());

        //$users = json_decode($request->json()->all());
        //return response()->json($users);



    }

    public function get_rent_info(){


          $rent_info = RentInfo::all();

        
          return $rent_info;

    }
}
