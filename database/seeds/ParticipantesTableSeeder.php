<?php

use Illuminate\Database\Seeder;

class ParticipantesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\prd_participante::class,100)->create();
    }
}
