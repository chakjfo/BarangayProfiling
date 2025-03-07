<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

class IndexController extends Controller
{
    //
    public function Index() {
        $sessionData = session()->all();

        return Inertia::render('Index', [
            'message' => json_encode($sessionData, JSON_PRETTY_PRINT),
        ]);
    }
}
