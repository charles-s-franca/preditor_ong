<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaPrdTermo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prd_Termo', function (Blueprint $table) {
            $table->increments('trm_id');

            $table->integer('prt_id')->unsigned()->nullable(false);
            $table->foreign('prt_id')->references('prt_id')->on('prd_participante');

            $table->string('trm_desc');
            $table->string('trm_ass');

            $table->string('trm_nmUsuario',50);

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
        Schema::dropIfExists('prd_Termo');
    }
}
