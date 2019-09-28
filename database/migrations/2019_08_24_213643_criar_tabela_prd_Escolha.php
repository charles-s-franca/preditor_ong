<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaPrdEscolha extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prd_Escolha', function (Blueprint $table) {
            $table->increments('esc_id')->unique();
            $table->string('esc_nmEscolha');
            $table->timestamps();
            $table->string('esc_nmUsuario',50);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prd_Escolha');
    }
}
