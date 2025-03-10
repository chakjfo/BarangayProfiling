<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class GetUserDataMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        
            
        Inertia::share([
            'user' => [
                'name' => Auth::user()->name,
                'email' => Auth::user()->email,
            ],
        ]);
        

        return $next($request);
    }
}
