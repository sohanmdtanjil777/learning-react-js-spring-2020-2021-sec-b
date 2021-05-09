<?php

namespace App\Http\Controllers;

use App\Doctor;
use App\User;
use Illuminate\Http\Request;

class DoctorRegisterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $umail = User::where('email', $request->email)->get();
      $uname = User::where('user_name',$request->user_name)->get();

        if(sizeof($umail) > 0 or sizeof($uname) > 0){

            $msg = 'username or email already exists';
            echo $msg;
           // return back();
        }

        else{

      $user = new User();
      // $file1 = request('image');
      // $filename1 = time().".".$file1->getClientOriginalExtension();
      // $file1->move('upload', $filename1);
      $filename1 = "dummy";

      $user->user_name = request('user_name');
      $user->first_name = request('first_name');
      $user->last_name = request('last_name');
      $user->email = request('email');
      $user->password = request('password');
      $user->image = $filename1;
      $user->dob = request('dob');
      $user->gender = request('gender');
      $user->blood_type = request('blood_type');
      $user->nid = request('nid');
      $user->contact = request('contact');
      $user->user_type = "invalid";
      $user->save();

      $adpm_id = User::latest()->first()->id;

      $doctor = new Doctor();
      // $file = request('certificate');
      // $filename = time().".".$file->getClientOriginalExtension();
      // $file->move('upload', $filename);

      $filename = "dummy";

      $doctor->about            = request('about');
      $doctor->category         = request('category');
      $doctor->degree           = request('degree');
      $doctor->bmdc_id          = request('bmdc_id');
      $doctor->visit_fee        = request('visit_fee');
      $doctor->certificate = $filename;
      $doctor->status = "invalid";
      $doctor->adpm_id = $adpm_id;
      $doctor->save();





        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
