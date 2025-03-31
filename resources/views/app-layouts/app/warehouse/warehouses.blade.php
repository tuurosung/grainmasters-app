@extends('app-layouts.app')

@section('content')
<div class="d-flex justify-content-between mb-4">
    <div>
        <h1 class="text-2xl font-bold">Warehouse List</h1>
    </div>
    <div>
        <button class="btn btn-primary" data-toggle="modal" data-target="#newWarehouseModal">
            Add Warehouse</button>
    </div>
</div>

@include('app-layouts.partials.errors')

<div class="card border-0">
    <div class="card-body">


        <table class="table table-sm datatables" id="warehouses-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Warehouse Name</th>
                    <th>Location</th>
                    <th>Capacity</th>
                    <th class="text-end">Actions</th>
                </tr>
            </thead>
            <tbody>
                @php
                $i = 1;
                @endphp
                @foreach ($warehouses as $warehouse)
                <tr>
                    <td>{{ $i++ }}</td>
                    <td>{{ $warehouse->description }}</td>
                    <td>{{ $warehouse->location }}</td>
                    <td>{{ $warehouse->capacity }}</td>
                    <td class="text-end">

                        <a href="#" class="btn-link text-primary edit" data-url="{{ route('edit-warehouse', $warehouse) }}">
                            <i class="fas fa-pen"></i> Edit</a>


                        <form class="d-inline-block" method="POST" action="{{ route('delete-warehouse', $warehouse) }}">
                            @csrf
                            @method('DELETE')
                            <a href="#" class="btn-link text-danger delete">
                                <i class="fas fa-trash-alt"></i> Delete</a>
                        </form>


                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>


@include('app-layouts.app.warehouse.modals.new-warehouse')

<div id="modal_holder"></div>
@endsection


@section('js')

<script>
$('.table tbody').on('click', '.edit', function() {
    var url = $(this).data('url');
    $.get(url, function(data) {
        $('#modal_holder').html(data);
        $('#editWarehouseModal').modal('show');
    });
});

$('.table tbody').on('click', '.delete', function() {
    var form = $(this).closest('form');
    bootbox.confirm("Are you sure you want to delete this warehouse?", function(response) {
        if (response) {
            form.submit();
        }
    })
})
</script>

@endsection
