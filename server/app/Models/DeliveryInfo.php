<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveryInfo extends Model
{
    use HasFactory;

    protected $fillable = [
        'pickAddress',
        'pickName',
        'pickTel',
        'pickEmail',
        'deliAddress',
        'deliName',
        'deliContact',
        'deliEmail',
        'goodType',
        'deliProvider',
        'priority',
        'pickDate',
        'pickTime',
        'pickName',
    ];
}
