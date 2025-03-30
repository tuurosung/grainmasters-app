@extends('app-layouts.app')

@section('content')

<div class="d-flex justify-content-between mb-4">
    <div>
        <h1 class="text-2xl font-bold">Grain List</h1>
    </div>
    <div>
        <button class="btn btn-primary" data-toggle="modal" data-target="#newGrainModal"
            data-bs-target="#newGrainModal">
            Add Grain</button>
    </div>


</div>

@include('app-layouts.partials.errors')

<div class="card border-0">
    <div class="card-body">

        <h5 class="fw-500 Avante mb-4">List Of Grains</h5>

        <table class="table table-sm datatables">
            <thead>
                <tr>
                    <th class="">ID</th>
                    <th class="">Name</th>
                    <th class="">Color</th>
                    <th class="">Size</th>
                    <th class="text-end">Options</th>
                </tr>
            </thead>
            <tbody>
                @php
                $i = 1;
                @endphp

                @foreach ($grains as $grain)
                <tr>
                    <td class="">{{ $i++ }}</td>
                    <td class="">{{ $grain->name }}</td>
                    <td class="">{{ $grain->color }}</td>
                    <td class="">{{ $grain->size }}</td>
                    <td class="text-end">
                        <a href="#" data-url="{{ route('edit-grain', $grain) }}" class="text-primary me-2 edit">
                            <i class="fas fa-pen"></i>
                            Edit
                        </a>
                        <form class="d-inline-block" action="{{ route('grains.destroy', $grain) }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <a type="submit" class="text-danger delete">
                                <i class="fas fa-trash-alt    "></i>
                                Delete</a>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>


@include('app-layouts.app.grains.modals.new-grain-modal')

<div id="modal_holder"></div>
@endsection

@section('js')
<script type="text/javascript">

    $('.table tbody').on('click', '.edit', function () {

        var url = $(this).data('url');

        $.get(url, function (data) {
            $('#modal_holder').html(data);
            $('#editGrainModal').modal('show');
        })
    })

    $('.table tbody').on('click', '.delete', function () {
        var grain = $(this).closest('form')

        bootbox.confirm("Are you sure you want to deletet this grain?", function (response) {
            if (response) {
                grain.submit();
            }
        })
    })
</script>
@endsection
