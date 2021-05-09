<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\LoginController;
use App\Doctor;
use App\User;
use App\Blog;
use App\Application;
use App\Complaint;
/*



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->post('/user', function (Request $request) {
    //return $request->user();
//});

////////////-----Medical Service Providers -----------------///////////
Route::post('/insert_new_user', 'ReactRegisterController@insert_new_user');

Route::get('/get_rent_info', 'ReactRegisterController@get_rent_info');

Route::post('/insert_ad', 'ReactRegisterController@insert_ad');

Route::get('/get_ad', 'ReactRegisterController@get_ad');

////////////////--------Patient--------/////////////

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/patient/registration', 'PatientController@store');
Route::post('/login', 'LoginController@verify');

Route::get('/patient/doctors', 'DoctorController@index');


///////////////------------Doctor-------------///////////

Route::resource('blogs','BlogController');
Route::resource('applications','ApplicationController');
Route::resource('doctors','DoctorRegisterController');
Route::resource('complaints','ComplaintController');
Route::resource('appointments','AppointmentController');




