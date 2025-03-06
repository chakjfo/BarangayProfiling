<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CheckLoginData;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index', );
});


Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');


Route::post('/login', [LoginController::class, 'login']
)->name('login');


Route::get('/register', function () {
    return Inertia::render('Register');
})->name('register');


Route::post('/register', [RegisterController::class, 'register']
)->name('register');




require __DIR__.'/auth.php';
