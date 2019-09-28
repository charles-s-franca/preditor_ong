<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaPrdDocumentoClinico extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prd_Documento_Clinico', function (Blueprint $table) {
            $table->increments('doc_id')->unique();
            
            $table->integer('tpd_id')->unsigned()->nullable(false);
            $table->foreign('tpd_id')->references('tpd_id')->on('prd_tipo_documento');

            $table->integer('prt_id')->unsigned()->nullable(false);
            $table->foreign('prt_id')->references('prt_id')->on('prd_participante');

            $table->string('doc_participacao');
            $table->integer('doc_nrAvaliacao');
            $table->timestamps();

            $table->string('doc_nmUsuario',50);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prd_Documento_Clinico');
    }
}
