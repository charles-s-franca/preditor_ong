<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaPrdEstInst extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prd_Estudo_Inst', function (Blueprint $table) {
            $table->increments('eti_id')->unique();
            $table->integer('est_id')->unsigned();
            $table->foreign('est_id')->references('est_id')->on('prd_estudo');
            $table->integer('ins_id')->unsigned();
            $table->foreign('ins_id')->references('ins_id')->on('prd_instituicao');
            $table->string('eti_Responsavel_sn',1);
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
        Schema::dropIfExists('prd_Estudo_Inst');
    }
}
