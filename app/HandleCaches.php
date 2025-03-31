<?php

namespace App;

use Illuminate\Support\Facades\Cache;

trait HandleCaches
{
    /**
     * Get the cache key for this model.
     *
     * @return string
     */
    protected function cacheKey(): string
    {
        // this will be defined in the model
        return $this->cacheKey ?? null;
    }

    /**
     * Boot the trait.
     */
    protected static function boot()
    {
        parent::boot();

        static::saved(function ($model) {
            Cache::forget($model->cacheKey());
        });

        static::deleted(function ($model) {
            Cache::forget($model->cacheKey());
        });
    }
}
