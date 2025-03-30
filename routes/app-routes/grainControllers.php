<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GrainController;


Route::prefix('grains')->controller(GrainController::class)->group(function () {
    Route::get('/', 'index')->name('grains.index');
    Route::get('/{grain}', 'show')->name('grains.show');
    Route::get('/edit/{grain}', 'edit')->name('edit-grain');
    Route::post('/', 'store')->name('store-grain');
    Route::patch('/{grain}', 'update')->name('update-grain');
    Route::delete('/{grain}', 'destroy')->name('grains.destroy');
});
