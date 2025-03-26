<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Residents;

class DashboardController extends Controller
{
    //
    public function show()
    {
      
        
        $alreadyRegistered = Residents::where('id', auth()->user()->id)->exists();
        $usersCount = User::count();
        $residentsCount = Residents::count();
        return Inertia::render('Dashboard', [
            'userCount' => $usersCount,
            'residentsCount' => $residentsCount,
            'alreadyRegistered' => $alreadyRegistered
            
            
        ]);
    }
}
