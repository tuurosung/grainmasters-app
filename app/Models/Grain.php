<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grain extends Model
{
    /** @use HasFactory<\Database\Factories\GrainFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'size',
        'color',
        'variety',
        'category'
    ];
}
