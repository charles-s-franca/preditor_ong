<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaPrdEstudo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prd_Estudo', function (Blueprint $table) {
            $table->increments('est_id')->unique();
            $table->string('est_nmEstudo');
            $table->string('est_cdComiteEtica');

            $table->integer('itf_id')->unsigned()->nullable();
            $table->foreign('itf_id')->references('itf_id')->on('prd_Interferencia');

            $table->integer('ins_id')->unsigned()->nullable();
            $table->foreign('ins_id')->references('ins_id')->on('prd_Instituicao');

            $table->integer('tpu_id')->unsigned()->nullable();
            $table->foreign('tpu_id')->references('tpu_id')->on('prd_Tipo_Unidade');

            $table->integer('ale_id')->unsigned()->nullable();
            $table->foreign('ale_id')->references('ale_id')->on('prd_Aleatorizacao_Amostral');

            $table->integer('rlc_id')->unsigned()->nullable();
            $table->foreign('rlc_id')->references('rlc_id')->on('prd_relacao_temp_exp');

            $table->integer('itv_id')->unsigned()->nullable();
            $table->foreign('itv_id')->references('itv_id')->on('prd_intervencao_terapeutica');

            $table->integer('ori_id')->unsigned()->nullable();
            $table->foreign('ori_id')->references('ori_id')->on('prd_originalidade');

            $table->integer('msc_id')->unsigned()->nullable();
            $table->foreign('msc_id')->references('msc_id')->on('prd_mascaramento');

            $table->integer('prc_id')->unsigned()->nullable();
            $table->foreign('prc_id')->references('prc_id')->on('prd_procedencia_equipe');

            $table->integer('frq_id')->unsigned()->nullable();
            $table->foreign('frq_id')->references('frq_id')->on('prd_tipo_frequencia');

            $table->integer('drc_id')->unsigned()->nullable();
            $table->foreign('drc_id')->references('drc_id')->on('prd_direcionalidade');

            $table->integer('psg_id')->unsigned()->nullable();
            $table->foreign('psg_id')->references('psg_id')->on('prd_periodo_seguimento');

            $table->string('est_snAtivo',1);
            $table->string('est_nmUsuario',50);
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
        Schema::dropIfExists('prd_Estudo');
    }
}
