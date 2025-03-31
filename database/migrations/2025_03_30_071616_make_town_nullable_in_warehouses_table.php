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
        Schema::table('warehouses', function (Blueprint $table) {
            $table->string('town')->nullable()->change();
            $table->string('region')->nullable()->change();
            $table->string('capacity')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('warehouses', function (Blueprint $table) {
            $table->string('town')->nullable(false)->change();
            $table->string('region')->nullable(false)->change();
            $table->string('capacity')->nullable(false)->change();
        });
    }
};
