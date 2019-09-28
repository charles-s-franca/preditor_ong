<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaPrdAlternativa extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prd_Alternativa', function (Blueprint $table) {
            $table->increments('alt_id')->unique();
            $table->string('alt_letra',2);
            $table->string('alt_snAtivo',1);
            $table->timestamps();

            $table->string('alt_nmUsuario',50);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prd_Alternativa');
    }
}
