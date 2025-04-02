<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('grain_purchases', function (Blueprint $table) {
            $table->id();
            $table->foreignId('grain_id')->constrained()->onDelete('cascade');
            $table->string('source');
            $table->date('purchase_date');
            $table->decimal('quantity', 8, 2); // Number Of Sacks
            $table->decimal('price_per_sack', 10, 2); // Price per sack
            $table->decimal('total_cost', 10, 2)->storedAs('quantity * price_per_sack'); // Total cost of the purchase
            $table->decimal('transportation_cost', 10, 2)->default(0); // Transportation cost
            $table->decimal('loading_cost', 10, 2)->default(0); // Loading cost
            $table->decimal('total_purchase_cost', 10, 2)->storedAs('total_cost + transportation_cost + loading_cost'); // Total purchase cost
            $table->foreignId('warehouse_id')->constrained()->onDelete('cascade'); // Foreign key to the warehouses table
            $table->string('purchased_by'); // Name of the field officer
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('grain_purchases');
    }
};
