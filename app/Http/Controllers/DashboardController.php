<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    //
    public function Show() {
        
       
        return Inertia::render('Dashboard', [
            'name' => Auth::user()->name,
        ]);
    }
}
