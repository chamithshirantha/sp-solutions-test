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
        Schema::create('delivery_infos', function (Blueprint $table) {
            $table->id();
            $table->string('pickAddress');
            $table->string('pickName');
            $table->string('pickTel');
            $table->string('pickEmail')->nullable();
            $table->string('deliAddress');
            $table->string('deliName');
            $table->string('deliContact');
            $table->string('deliEmail')->nullable();
            $table->string('goodType');
            $table->string('deliProvider');
            $table->string('priority');
            $table->date('pickDate');
            $table->time('pickTime');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('delivery_infos');
    }
};
