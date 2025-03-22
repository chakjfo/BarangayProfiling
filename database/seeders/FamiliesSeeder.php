<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Families;
use App\Models\Residents;

class FamiliesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Residents::all()->each(function ($resident) {
            Families::factory()->create(['family_head_resident_id'=> $resident->id]);
        });
    }
}