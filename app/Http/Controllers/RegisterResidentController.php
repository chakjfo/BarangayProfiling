<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterResidentRequest;
use Illuminate\Http\Request;
use App\Models\Residents;

class RegisterResidentController extends Controller
{
    public function RegisterResident(RegisterResidentRequest $request) {
       
        $convertedData = $request->validatedData();

        Residents::create($convertedData);

        return redirect('/');
    }
}
