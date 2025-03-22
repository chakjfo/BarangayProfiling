<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Families extends Model
{
    use HasFactory;

    protected $fillable = [
        'family_head_resident_id'
    ];

    public function resident()
    {
        return $this->belongsTo(Residents::class, 'resident_id');
    }
}
