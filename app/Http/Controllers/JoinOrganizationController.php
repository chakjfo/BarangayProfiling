<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class JoinOrganizationController extends Controller
{
    //
    public function show()
    {
        return inertia('JoinOrganization');
    }

    public function join(Request $request)
    {
        

        return back()->withErrors(['error' => 'Failed to join organization.']);
    }
}
