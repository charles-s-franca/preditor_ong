<?php

namespace Preditor\Http\Controllers;

use Illuminate\Http\Request;
use Preditor\Models\Estado;

class EstadoController extends Controller
{
    public function find(Request $request)
    {
        return Estado::search($request->get('q'))->with('profile')->get();
    }

    public function index()
    {
        return view('admin.estado.index');
    }

}
