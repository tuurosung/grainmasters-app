<?php

namespace App\Helpers;

class GrainHelper
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public static function grainTypes() {
        return [

        ];
    }

    public static function grainSizes() {
        return [
            '50kg' => '50 kg',
            '100kg' => '100 kg',
        ];
    }

    public static function grainColors() {
        return [
            'N/A' => 'N/A',
            'White' => 'White',
            'Yellow' => 'Yellow',
        ];
    }
}
