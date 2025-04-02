@extends('app-layouts.app')

@section('content')


<div class="d-flex justify-content-between mb-5">
    <div>
        <h1 class="text-2xl font-bold">Grain Purchases</h1>
    </div>
    <div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#newPurchaseModal">New
            Purchase</button>
    </div>
</div>

@include('app-layouts.partials.errors')

<div class="card border-0">
    <div class="card-body">

        <div class="">
            <table class="table table-sm datatables">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Grain Description</th>
                        <th scope="col">Warehouse</th>
                        <th scope="col">Purchased By</th>
                        <th scope="col">Qty</th>
                        <th scope="col" class="text-end">Unit Price</th>
                        <th scope="col" class="text-end">Total</th>
                        <th scope="col" class="text-end">Transportation</th>
                        <th class="text-end">Loading Cost</th>
                        <th class="text-end">Total Purchase Cost</th>


                        <th scope="col" class="text-end">Options</th>

                    </tr>
                </thead>
                <tbody>
                    @php
                    $i = 1;
                    @endphp

                    @foreach ($grainPurchases as $grainPurchase)
                    <tr class="">
                        <td scope="">{{ $i++ }}</td>
                        <td scope="">{{ $grainPurchase->purchase_date }}</td>
                        <td>{{ $grainPurchase->grain->name }}</td>
                        <td>{{ $grainPurchase->warehouse->description }}</td>
                        <td>{{ $grainPurchase->purchased_by }}</td>
                        <td>{{ $grainPurchase->quantity }}</td>
                        <td class="text-end pe-20px">{{ $grainPurchase->price_per_sack }}</td>
                        <td class="text-end pe-20px">{{ $grainPurchase->total_cost_formatted }}</td>
                        <td class="text-end pe-20px">{{ $grainPurchase->transportation_cost }}</td>
                        <td class="text-end pe-20px">{{ $grainPurchase->loading_cost }}</td>
                        <td class="text-end pe-20px">{{ $grainPurchase->total_purchase_cost_formatted }}</td>

                        <td class="text-end">
                            <a href="#" class="btn-link text-primary me-3 edit"
                                data-url="{{ route('edit-purchase', $grainPurchase) }}">
                                <i class="fas fa-pen "></i> Edit
                            </a>
                            <form method="POST" action="{{ route('delete-purchase', $grainPurchase) }}"
                                class="d-inline">
                                @csrf
                                @method('delete')
                                <a href="#" class="btn-link text-danger delete">
                                    <i class="fas fa-trash-alt"></i> Delete
                                </a>
                            </form>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

    </div>
</div>

@include('app-layouts.app.grain-purchase.modals.new-purchase')

<div id="modal_holder"></div>
@endsection


@section('js')

<script>
$('#purchase_date').datepicker({
    'format': 'yyyy-mm-dd',
    'autoclose': true,
    'todayHighlight': true
})


$('#quantity, #price_per_sack, #transportation_cost, #loading_cost').on('input', updateTotals);


$('.table tbody').on('click', '.edit', function() {
    var url = $(this).data('url');

    $.get(url, function(msg) {
        $('#modal_holder').html(msg);
        $('#editPurchaseModal').modal('show');

        $('#edit_quantity, #edit_price_per_sack, #edit_transportation_cost, #edit_loading_cost').on(
            'input', updateTotals);
    });
})


$('.table tbody').on('click', '.delete', function() {
    var form = $(this).closest('form');

    bootbox.confirm("Are you sure you want to delete this purchase entry?", function(result) {
        if (result) {
            form.submit();
        }
    });
})

function formatNumber(number) {
    return parseFloat(number).toLocaleString('en-Us', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}

function updateTotals() {

    // Determine if we're in edit mode or new mode based on which fields exist
    const isEditMode = $('#edit_quantity').length > 0;
    const prefix = isEditMode ? 'edit_' : '';

    // Get input values
    const quantity = parseFloat($(`#${prefix}quantity`).val()) || 0;
    const price = parseFloat($(`#${prefix}price_per_sack`).val()) || 0;
    const transportation_cost = parseFloat($(`#${prefix}transportation_cost`).val()) || 0;
    const loading_cost = parseFloat($(`#${prefix}loading_cost`).val()) || 0;

    // Calculate totals
    const total_cost = quantity * price;
    const total_purchase_cost = total_cost + transportation_cost + loading_cost;

    // Update form fields
    $(`#${prefix}total_cost`).val(total_cost.toFixed(2));
    $(`#${prefix}total_cost_display`).text(formatNumber(total_cost));

    $(`#${prefix}total_purchase_cost`).val(total_purchase_cost.toFixed(2));
    $(`#${prefix}total_purchase_cost_display`).text(formatNumber(total_purchase_cost));
}
</script>
@endsection
