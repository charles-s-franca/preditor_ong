<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CriarTabelaPrdCidade extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prd_Cidade', function (Blueprint $table) {
            $table->increments('cid_id')->unique();;
            $table->string('cid_nmCidade');

            $table->integer('est_id')->unsigned()->nullable();
            $table->foreign('est_id')->references('est_id')->on('prd_Estado');

            $table->string('cid_nmUsuario',50);
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
        Schema::dropIfExists('prd_Cidade');
    }
}
