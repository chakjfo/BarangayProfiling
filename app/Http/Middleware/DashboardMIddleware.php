<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;


class DashboardMIddleware
{
    
    public function handle(): Response
    {
        if (!auth()->check()) {
            return redirect()->route('login');
        }


        $name = Auth::user()->name;

        return Inertia::render('Dashboard', [
            'name' => $name
        ]);
    }
}
