<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WarehouseController;

Route::prefix('warehouse')->controller(WarehouseController::class)->group(function () {
    Route::get('/', 'index')->name('warehouses');
    Route::get('/{warehouse}', 'show')->name('show-warehouse');
    Route::get('/edit/{warehouse}', 'edit')->name('edit-warehouse');
    Route::post('/', 'store')->name('store-warehouse');
    Route::patch('/{warehouse}', 'update')->name('update-warehouse');
    Route::delete('/{warehouse}', 'destroy')->name('delete-warehouse');
});
