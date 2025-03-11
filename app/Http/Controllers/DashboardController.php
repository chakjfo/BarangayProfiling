<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class DashboardController extends Controller
{
    //
    public function show()
    {
        $usersCount = User::count();
        return Inertia::render('Dashboard', [
            'userCount' => $usersCount,
        ]);
    }
}
