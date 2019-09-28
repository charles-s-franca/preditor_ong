<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaPrdParticipante extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prd_Participante', function (Blueprint $table) {
            $table->increments('prt_id')->unique();
            $table->string('prt_nMatricula',10);
            $table->string('prt_iniciais',3);
            $table->string('prt_snAtivo',1);
            $table->string('prt_nmUsuario',50);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prd_Participante');
    }
}
