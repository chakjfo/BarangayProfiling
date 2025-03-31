<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;

class OrganizationManagerController extends Controller
{
    //
    public function show()
    {
        $UserId = auth()->id();
 
        $UserRow = User::where('id', $UserId)->first()->makeVisible('is_admin')->toArray();
      

        return $UserRow['is_admin'] == 0 ? 
            redirect('/dashboard') : 
            Inertia::render('OrganizationManager', []);
    }
}
