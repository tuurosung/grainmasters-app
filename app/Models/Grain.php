<?php

namespace App\Models;

use App\HandleCaches;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Grain extends Model
{
    /** @use HasFactory<\Database\Factories\GrainFactory> */
    use HasFactory;
    use HandleCaches;

    protected $cacheKey = 'grains';


    protected $fillable = [
        'name',
        'type',
        'size',
        'color',
        'variety',
        'category'
    ];
}
