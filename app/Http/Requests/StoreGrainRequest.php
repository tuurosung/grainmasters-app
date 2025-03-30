<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class StoreGrainRequest extends FormRequest
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
        $id = request()->route('grain')?->id ?? null;

        // dd($id);

        return [
            'name' => [
                'required',
                'string',
                'max:255',
                Rule::unique('grains')->whereNot('id', $id),
            ],
            'type' => 'nullable|string|max:1000',
            'size' => 'required|string',
            'color' => 'nullable|string|max:1000',
            'variety' => 'nullable|string|max:1000',
            'category' => 'nullable|string|max:1000',
        ];
    }
}
