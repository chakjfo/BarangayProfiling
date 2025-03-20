<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Residents extends Model
{
    protected $fillable = [
        "first_name",
        "middle_name",
        "last_name",
        "name_extension",
        "gender",
        "birth_date",
        "civil_status",
        "religion",
        "ethnicity",
        "blood_type",
        "civil_status",
    ];
    /** @use HasFactory<\Database\Factories\ResidentsFactory> */
    use HasFactory;
}
