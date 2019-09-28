<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaPrdQuestao extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prd_Questao', function (Blueprint $table) {
            $table->increments('qst_id')->unique();
            $table->string('qst_nrQuestao');
            $table->string('qst_nmQuestao');
            $table->integer('tpd_id')->unsigned()->nullable(false);
            $table->foreign('tpd_id')->references('tpd_id')->on('prd_tipo_documento');
            $table->string('qst_snAtivo',1);
            $table->string('qst_nmUsuario',50);
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
        Schema::dropIfExists('prd_Questao');
    }
}
