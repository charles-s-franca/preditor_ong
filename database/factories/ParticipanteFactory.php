<?php

use Faker\Generator as Faker;

$factory->define(App\prd_participante::class, function (Faker $faker) {
    return [
        'prt_nMatricula' => $faker->numberBetween(0,500),
        'prt_Iniciais' => str_random(3),
        'prt_snAtivo' => 'S',
        'prt_nmUsuario' => str_random(10),

    ];
});
