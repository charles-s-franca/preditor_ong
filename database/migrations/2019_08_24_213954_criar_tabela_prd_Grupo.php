<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaPrdGrupo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prd_Grupo', function (Blueprint $table) {
            $table->increments('grp_id');

            $table->integer('est_id')->unsigned()->nullable();
            $table->foreign('est_id')->references('est_id')->on('prd_estudo');

            $table->integer('prt_id')->unsigned()->nullable();
            $table->foreign('prt_id')->references('prt_id')->on('prd_participante');

            $table->string('grp_nmGrupo');
            $table->string('grp_nmUsuario',50);
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
        Schema::dropIfExists('prd_Grupo');
    }
}
