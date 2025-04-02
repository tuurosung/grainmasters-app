<?php

namespace App\Services;

use App\Models\Warehouse;

class WarehouseService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get all warehouses.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAllWarehouses()
    {
        return Warehouse::all();
    }
}
