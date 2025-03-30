<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Grain>
 */
class GrainFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'type' => $this->faker->randomElement(['grain', 'seed']),
            'size' => $this->faker->randomElement(['50kg', '100kg']),
            'color' => $this->faker->randomElement(['N/A', 'White', 'Yellow']),
            'variety' => $this->faker->word(),
            'category' => $this->faker->word(),
        ];
    }
}
