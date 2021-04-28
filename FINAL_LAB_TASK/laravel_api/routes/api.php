<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/api/person_info_insert_request', 'digital_diaryController@insert_person_daily_notes');

Route::get('/api/get_person_notes', 'digital_diaryController@get_person_notes');

Route::get('/api/delete_person_notes', 'digital_diaryController@delete_person_notes');