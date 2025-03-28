<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Residents;
use Inertia\Inertia;


class EditProfileController extends Controller
{
    //
    public function Show(){
        $UserData = Residents::where('user_id', auth()->id())->get()->toArray();
        
        
        return Inertia::render('EditProfile', [
            'UserData' => $UserData
        ]);
    }
    public function Edit(Request $request){
        dd("Worked");

    }
}
