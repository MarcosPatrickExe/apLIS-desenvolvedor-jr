<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Medico extends Model
{
    protected $fillable = [
        'nome',
        'crm',
        'uf_crm'
    ];
}
