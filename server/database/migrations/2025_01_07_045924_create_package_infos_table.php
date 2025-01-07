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
        Schema::create('package_infos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('deliveryInfoId');
            $table->text('packDescript');
            $table->integer('length');
            $table->integer('height');
            $table->integer('width');
            $table->timestamps();
            $table->foreign('DeliveryInfoId')->references('id')->on('delivery_infos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('package_infos');
    }
};
