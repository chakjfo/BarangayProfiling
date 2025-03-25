<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterResidentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'middle_name' => 'required|string',
            'name_extension' => 'required|string',
            'gender' => 'required|string',
            
            'birth_date' => 'required|string',
            'religion' => 'required|string',
            'ethnicity' => 'required|string',
            'bloodType' => 'required|string',
            
            'civil_status' => 'required|string',
            'yearStartedStaying' => 'required|string',
            'status_of_employment' => 'required|string',
            'pension' => 'required|string',
        ];
    }

    public function validatedData(): array
    {
        $validated = $this->validated();

        return [
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'middle_name' => $validated['middle_name'],
            'name_extension' => $validated['name_extension'],
            'gender' => $validated['gender'],

            'birth_date' => date('Y-m-d', strtotime($validated['birth_date'])), // Convert to Date (YYYY-MM-DD)
            'religion' => $validated['religion'],
            'ethnicity' => $validated['ethnicity'],
            'blood_type' => $validated['bloodType'], // Change key to match DB

            'civil_status' => $validated['civil_status'],
            'year_started_staying' => (int) $validated['yearStartedStaying'], // Convert to Integer
            'status_of_employment' => $validated['status_of_employment'],
            'pension' => number_format((float) $validated['pension'], 2, '.', ''), // Convert to Decimal (10,2)
        ];
    }
}
