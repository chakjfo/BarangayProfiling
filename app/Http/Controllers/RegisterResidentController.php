<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterResidentRequest;
use Inertia\Inertia;
use App\Models\Residents;

class RegisterResidentController extends Controller
{
    public function RegisterResident(RegisterResidentRequest $request) {
       
        $convertedData = $request->validatedData();

        Residents::create($convertedData);

        return redirect('/');
    }

    public function Show() {
        $alreadyRegistered = Residents::where('id', auth()->user()->id)->exists();

        if($alreadyRegistered) {
            return redirect('/dashboard');
        }

        return Inertia::render('RegisterAsResident');
    }
}
