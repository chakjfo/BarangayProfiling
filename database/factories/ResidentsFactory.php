<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Residents>
 */
class ResidentsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'last_name' => $this->faker->lastName,
            'first_name' => $this->faker->firstName,
            'middle_name' => $this->faker->firstName,
            'name_extension' => $this->faker->randomElement(['Jr.', 'Sr.', 'III', '']), // Some may not have an extension
            'gender' => $this->faker->randomElement(['Male', 'Female']),
            'birth_date' => $this->faker->date('Y-m-d', '2005-01-01'), // Random birthdate before 2005
            'civil_status' => $this->faker->randomElement(['Single', 'Married', 'Divorced', 'Widowed']),
            'religion' => $this->faker->randomElement(['Christianity', 'Islam', 'Hinduism', 'Buddhism', 'None']),
            'ethnicity' => $this->faker->word, // Generates a random word as ethnicity
            'blood_type' => $this->faker->randomElement(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']),
        ];
    }
}
