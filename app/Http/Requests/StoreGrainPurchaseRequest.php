<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreGrainPurchaseRequest extends FormRequest
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
            'grain_id' => 'required',
            'source' => 'nullable',
            'purchase_date' => 'required',
            'quantity' => 'required|integer',
            'price_per_sack' => 'required|numeric',
            'total_cost' => 'required|numeric',
            'transportation_cost' => 'required|numeric',
            'loading_cost' => 'required|numeric',
            'total_purchase_cost' => 'required|numeric',
            'warehouse_id' => 'required',
            'purchased_by' => 'required',
        ];
    }
}
