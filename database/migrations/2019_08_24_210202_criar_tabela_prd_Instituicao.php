<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaPrdInstituicao extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prd_Instituicao', function (Blueprint $table) {
            $table->increments('ins_id')->unique();
            $table->string('ins_cnpj',14)->unique();
            $table->string('ins_nmInstituicao');
            $table->string('ins_endereco');
            $table->string('ins_bairro');
            $table->string('ins_CEP',8);

            $table->integer('cid_id')->unsigned()->nullable();
            $table->foreign('cid_id')->references('cid_id')->on('prd_Cidade');

            $table->string('ins_nmUsuario',50);
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
        Schema::dropIfExists('prd_Instituicao');
    }
}
