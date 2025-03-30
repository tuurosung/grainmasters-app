<?php

namespace Tests\Feature\Controllers;

use Tests\TestCase;
use App\Models\User;
use App\Models\Grain;
use App\Services\GrainService;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;


class GrainController extends TestCase
{
    use RefreshDatabase, WithFaker;

    protected $user;

    public function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create();
        $this->actingAs(User::factory()->create());
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function test_it_displays_a_list_of_grains()
    {
        // Create test grains
        $grains = Grain::factory(3)->create();

        // Check if GrainService Returns the grains
        $this->mock(GrainService::class,  function($mock) use ($grains) {
            $mock->shouldReceive('getAllGrains')
                ->once()
                ->andReturn($grains);
        });

        // Make a request to the index route
        $response = $this->get(route('grains.index'));

        // Assert the response is successful
        $response->assertStatus(200);

        // Assert each grain is displayed in the response
        foreach ($grains as $grain) {
            $response->assertSee($grain->name);
        }

        $response->assertStatus(200);
        $response->assertViewIs('app-layouts.app.grains.grain-list');
        $response->assertViewHas('grains', $grains);
    }
}
