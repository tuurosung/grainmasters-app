<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GrainPurchase extends Model
{
    /** @use HasFactory<\Database\Factories\GrainPurchaseFactory> */
    use HasFactory;

    protected $fillable = [
        'grain_id',
        'source',
        'purchase_date',
        'quantity',
        'price_per_sack',
        'transportation_cost',
        'loading_cost',
        'warehouse_id',
        'purchased_by',
    ];

    protected function totalCostFormatted():Attribute
    {
        return new Attribute(
            get: fn () => number_format($this->total_cost, 2),
        );
    }

    protected function totalPurchaseCostFormatted():Attribute
    {
        return new Attribute(
            get: fn () => number_format($this->total_purchase_cost, 2),
        );
    }

    public function grain()
    {
        return $this->belongsTo(Grain::class);
    }

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);
    }

}
