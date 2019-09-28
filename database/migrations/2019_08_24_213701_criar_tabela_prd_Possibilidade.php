<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaPrdPossibilidade extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prd_Possibilidade', function (Blueprint $table) {
            $table->increments('psb_id')->unique();

            $table->integer('qst_id')->unsigned();
            $table->foreign('qst_id')->references('qst_id')->on('prd_questao');

            $table->integer('alt_id')->unsigned();
            $table->foreign('alt_id')->references('alt_id')->on('prd_alternativa');

            $table->integer('esc_id')->unsigned();
            $table->foreign('esc_id')->references('esc_id')->on('prd_escolha');

            $table->float('psb_pontuacao')->nullable();
            $table->timestamps();

            $table->string('psb_nmUsuario',50);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prd_Possibilidade');
    }
}
