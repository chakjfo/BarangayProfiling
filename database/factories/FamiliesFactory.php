<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Families;
use App\Models\Residents;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Families>
 */
class FamiliesFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Families::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'family_head_resident_id' => Residents::factory(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}