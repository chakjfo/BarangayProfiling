<?php

namespace App\Http\Controllers;

use App\Models\Residents;
use Inertia\Inertia;


class EditProfileController extends Controller
{
    //
    public function Show(){
        $UserData = Residents::where('user_id', auth()->id())->get()->toArray();
        dd($UserData);
        
        return Inertia::render('EditProfile');
    }
}
