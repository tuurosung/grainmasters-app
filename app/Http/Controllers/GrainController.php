<?php

namespace App\Http\Controllers;

use App\Models\Grain;
use App\Services\GrainService;
use Illuminate\Support\Facades\Cache;
use App\Http\Requests\StoreGrainRequest;
use App\Http\Requests\UpdateGrainRequest;

class GrainController extends Controller
{
    private $grainService;

    public function __construct()
    {
        $this->grainService = new GrainService();
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
        if (!Grain::create($request->validated())) {
            return redirect()->back()->with('error', 'Grain not created');
        }

        // Clear the cache after creating a new grain
        Cache::forget('grains');

        return redirect()->back()->with('success', 'Grain created successfully');
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
        if (!$grain->update($request->validated())) {
            return redirect()->back()->with('error', 'Grain not updated');
        }

        // Clear the cache after updating a grain
        Cache::forget('grains');

        return redirect()->back()->with('success', 'Grain updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Grain $grain)
    {
        if (!$grain->delete()) {
            return redirect()->back()->with('error', 'Grain not deleted');
        }

        // Clear the cache after deleting a grain
        Cache::forget('grains');

        return redirect()->back()->with('success', 'Grain deleted successfully');
    }
}
