<?php

namespace App\Services;

use App\Models\Grain;
use Illuminate\Support\Facades\Cache;

class GrainService
{
    private $grain;

    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        $this->grain = new Grain;
    }

    /**
     * Get all grains.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAllGrains()
    {
        return Cache::remember(
            'grains',
            3600 * 24,
            fn() => $this->grain->query()
                ->orderBy('name')
                ->get()
        );
    }
}
