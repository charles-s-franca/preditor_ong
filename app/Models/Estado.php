<?php

namespace Preditor\Models;

use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;

class Estado extends Model
{
    use SearchableTrait;

    protected $fillable = [
        'est_id',
        'est_nmEstado',
        'est_sigla',
        'est_nmUsuario',
        'created_at',
        'updated_at'
    ];

    protected $searchable = [
        'columns' => [
            'est_nmEstado' => 10,
        ],

        'joins' => [
            'profiles' => ['est_id','profiles.est_id'],
        ],
    ];

    public function profile()
    {
        return $this->hasOne(Profile::class);
    }

    protected $table = 'prd_estado';


}
