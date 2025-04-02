<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GrainPurchaseController;

Route::prefix('purchases')->controller(GrainPurchaseController::class)->group(function () {
    Route::get('/', 'index')->name('purchases');
    Route::get('/create', 'create')->name('purchases.create');
    Route::post('/', 'store')->name('store-purchase');
    Route::get('/{grainPurchase}', 'show')->name('purchases.show');
    Route::get('/edit/{grainPurchase}', 'edit')->name('edit-purchase');
    Route::patch('/{grainPurchase}', 'update')->name('update-purchase');
    Route::delete('/{grainPurchase}', 'destroy')->name('delete-purchase');
});
