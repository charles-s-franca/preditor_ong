<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaPrdAleatorizacaoAmostral extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prd_Aleatorizacao_Amostral', function (Blueprint $table) {
            $table->increments('ale_id')->unique();
            $table->string('ale_desc');
            $table->string('ale_nmUsuario',50);
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
        Schema::dropIfExists('prd_Aleatorizacao_Amostral');
    }
}
