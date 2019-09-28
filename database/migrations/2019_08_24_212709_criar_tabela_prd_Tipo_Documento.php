<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaPrdTipoDocumento extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prd_Tipo_Documento', function (Blueprint $table) {
            $table->increments('tpd_id')->unique();
            $table->string('tpd_nmTipoDocumento');
            $table->string('tpd_snAtivo',1);
            $table->string('tpd_snTeste',1);
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
        Schema::dropIfExists('prd_Tipo_Documento');
    }
}
