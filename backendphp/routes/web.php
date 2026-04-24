<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MedicoController;

/*
Route::get('/', function () {
    return view('welcome');
});  */

Route::prefix('v1')->group( function () {
    Route::apiResource(
         name: 'medicos',
         controller: MedicoController::class
    )->only([ 'index', 'store', 'destroy', 'update' ]);
});

Route::fallback(function () {
    return response()->json([
        'message' => 'Rota inválida ou parâmetro ID não informado'
    ], 404);
});
