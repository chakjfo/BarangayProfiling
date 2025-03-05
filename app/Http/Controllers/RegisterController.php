<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\JsonResponse;


class RegisterController extends Controller
{

    public function register(RegisterUserRequest $request): JsonResponse
    {
        // If validation passes, get the validated data:
        $validated = $request->validated();

        // Create the user:
        $user = User::create([
            'email'    => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        return response()->json(data: ['message' => 'User registered successfully', 'user' => $user]);
    }
}
