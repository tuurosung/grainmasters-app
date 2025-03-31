<?php

namespace App\Http\Controllers;

use App\HandleResourceActions;
use App\HandleReturns;
use App\Http\Requests\StoreWarehouseRequest;
use App\Http\Requests\UpdateWarehouseRequest;
use App\Models\Warehouse;

class WarehouseController extends Controller
{
    use HandleResourceActions;

    protected $modelName = 'Warehouse'; // Name of the model, this is used in error messages
    private $model; // Model instance injected into the controller

    public function __construct()
    {
        $this->model = new Warehouse();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('app-layouts.app.warehouse.warehouses', [
            'warehouses' => Warehouse::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreWarehouseRequest $request)
    {
        return $this->handleStore($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Warehouse $warehouse)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Warehouse $warehouse)
    {
        return view('app-layouts.app.warehouse.modals.edit-warehouse', [
            'warehouse' => $warehouse
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWarehouseRequest $request, Warehouse $warehouse)
    {
        return $this->handleUpdate($request, $warehouse);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Warehouse $warehouse)
    {
       return $this->handleDelete($warehouse);
    }
}
