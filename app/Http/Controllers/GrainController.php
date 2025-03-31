<?php

namespace App\Http\Controllers;

use App\HandleResourceActions;
use App\Models\Grain;
use App\Services\GrainService;
use Illuminate\Support\Facades\Cache;
use App\Http\Requests\StoreGrainRequest;
use App\Http\Requests\UpdateGrainRequest;

class GrainController extends Controller
{
    use HandleResourceActions;

    protected $modelName = 'Grain';
    private $model;
    private $grainService;

    public function __construct()
    {
        $this->grainService = new GrainService();
        $this->model = new Grain;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('app-layouts.app.grains.grain-list', [
            'grains' => $this->grainService->getAllGrains()
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
    public function store(StoreGrainRequest $request)
    {
        return $this->handleStore($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Grain $grain)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Grain $grain)
    {
        return view('app-layouts.app.grains.modals.edit-grain-modal', [
            'grain' => $grain
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGrainRequest $request, Grain $grain)
    {
        return $this->handleUpdate($request, $grain);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Grain $grain)
    {
        return $this->handleDelete($grain);
    }
}
