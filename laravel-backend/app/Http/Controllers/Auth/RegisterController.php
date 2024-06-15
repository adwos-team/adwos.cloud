<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        Log::info('Register request received', $request->all());

        try {
            $validator = Validator::make($request->all(), [
                'companyName' => 'required|string|max:255',
                'fullName' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8|confirmed',
            ]);

            if ($validator->fails()) {
                Log::warning('Validation failed', $validator->errors()->toArray());
                return response()->json(['errors' => $validator->errors()], 422);
            }

            Log::info('Validation passed');

            $user = User::create([
                'companyName' => $request->get('companyName'),
                'fullName' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            Log::info('User created successfully', ['user' => $user]);

            return response()->json(['message' => 'User registered successfully', 'user' => $user], 201);
        } catch (\Exception $e) {
            Log::error('Error during registration', ['error' => $e->getMessage()]);
            dd($e->getMessage());
            return response()->json(['error' => 'An error occurred during registration.'], 500);
        }
    }
}
