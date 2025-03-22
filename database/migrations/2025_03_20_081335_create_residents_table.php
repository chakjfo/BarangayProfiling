<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    #TODO: TEMP
    public function up(): void
    {
        Schema::create('residents', function (Blueprint $table) {
            $table->id();
            $table->string("last_name");
            $table->string("first_name");
            $table->string("middle_name");
            $table->string("name_extension");
            $table->string("gender");
            $table->string("birth_date");
            $table->string("civil_status");
            $table->string("religion");
            $table->string("ethnicity");
            $table->string("blood_type");
            $table->string("civil_status");
            $table->string("year_started_staying");
            $table->string("status_of_employment");
            $table->double("pension");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('residents');
    }
};
