<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaPrdIntervencaoTerapeutica extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prd_Intervencao_Terapeutica', function (Blueprint $table) {
            $table->increments('itv_id')->unique();
            $table->string('itv_desc');
            $table->string('itv_nmUsuario',50);
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
        Schema::dropIfExists('prd_Intervencao_Terapeutica');
    }
}
