<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserAuthenticationRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\JsonResponse;


class RegisterController extends Controller
{

    public function register(UserAuthenticationRequest $request)
    {
        // If validation passes, get the validated data:
        $validated = $request->validated();

        // Create the user:
        User::create([
            'email'    => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        return redirect('/login');
    }
}
