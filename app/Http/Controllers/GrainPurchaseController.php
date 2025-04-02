<?php

namespace App\Http\Controllers;

use App\Models\GrainPurchase;
use App\HandleResourceActions;
use App\Services\GrainService;
use App\Services\WarehouseService;
use App\Http\Requests\StoreGrainPurchaseRequest;
use App\Http\Requests\UpdateGrainPurchaseRequest;

class GrainPurchaseController extends Controller
{
    use HandleResourceActions;

    protected $modelName = 'Grain Purchase';
    protected $model = GrainPurchase::class;

    public function __construct()
    {
        // $this->model = new GrainPurchase();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('app-layouts.app.grain-purchase.purchases', [
            'grainPurchases' =>GrainPurchase::with(['grain', 'warehouse'])->get(),
            'grains' => (new GrainService())->getAllGrains(),
            'warehouses' => (new WarehouseService())->getAllWarehouses(),
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
    public function store(StoreGrainPurchaseRequest $request)
    {
        return $this->handleStore($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(GrainPurchase $grainPurchase)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GrainPurchase $grainPurchase)
    {
        return view('app-layouts.app.grain-purchase.modals.edit-purchase', [
            'grainPurchase' => $grainPurchase,
            'grains' => (new GrainService())->getAllGrains(),
            'warehouses' => (new WarehouseService())->getAllWarehouses(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGrainPurchaseRequest $request, GrainPurchase $grainPurchase)
    {
        return $this->handleUpdate($request, $grainPurchase);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(GrainPurchase $grainPurchase)
    {
        return $this->handleDelete($grainPurchase);
    }
}
