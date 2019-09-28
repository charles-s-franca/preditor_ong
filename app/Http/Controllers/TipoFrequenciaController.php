<?php

namespace Preditor\Http\Controllers;

use Preditor\TipoFrequencia;


class TipoFrequenciaController extends Controller
{


    public function __construct()
    {

    }

    public function index()
    {
        return view('admin.tipoFrequencia.index');
    }

    public function create()
    {
       // dd('teste');
    }

}
