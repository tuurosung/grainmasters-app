<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class StoreWarehouseRequest extends FormRequest
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
        $id = request()->route('warehouse')?->id ?? null;

        return [
            'description' => [
                'required',
                'string',
                'max:255',
                Rule::unique('warehouses')->whereNot('id', $id)
            ],
            'location' => 'required|string|max:255',
            'town' => 'nullable|string|max:255',
            'region' => 'nullable|string|max:255',
            'capacity' => 'required|integer|min:0',
        ];
    }
}
