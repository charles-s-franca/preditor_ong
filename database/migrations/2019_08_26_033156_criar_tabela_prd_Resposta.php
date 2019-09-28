<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaPrdResposta extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prd_Resposta', function (Blueprint $table) {
            $table->increments('rsp_id')->unique();

            $table->integer('doc_id')->unsigned();
            $table->foreign('doc_id')->references('doc_id')->on('prd_documento_clinico');

            $table->integer('psb_id')->unsigned();
            $table->foreign('psb_id')->references('psb_id')->on('prd_possibilidade');

            $table->string('rsp_nmUsuario',50);
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
        Schema::dropIfExists('prd_Resposta');
    }
}
