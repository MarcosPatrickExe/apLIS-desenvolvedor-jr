<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MedicoController;

/*
Route::get('/', function () {
    return view('welcome');
});  */

Route::prefix('v1')->group(function () {
    Route::apiResource('medicos', MedicoController::class)->only([ 'index', 'store' ]);
});


