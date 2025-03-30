<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    @vite(['resources/css/appp.css', 'resources/js/app.js'])


    <style media="all">

        @font-face {
            font-family: 'Avante';
            font-weight: 700;
            src: url('{{ asset("fonts/Avante/ITCAvantGardePro-Bold.otf") }}');
        }

        @font-face {
            font-family: 'Avante';
            font-weight: 600;
            src: url('{{ asset("fonts/Avante/ITCAvantGardePro-Demi.otf") }}');
        }

        @font-face {
            font-family: 'Avante';
            font-weight: 500;
            src: url('{{ asset("fonts/Avante/ITCAvantGardePro-Md.otf") }}');
        }

        @font-face {
            font-family: 'Avante';
            font-weight: 400;
            src: url('{{ asset("fonts/Avante/ITCAvantGardePro-Bk.otf") }}');
        }

        @font-face {
            font-family: 'Avante';
            font-weight: 300;
            src: url('{{ asset("fonts/Avante/ITCAvantGardePro-XLt.otf") }}');
        }

        .montserrat {
            font-family: 'Montserrat', sans-serif;
        }

        .poppins {
            font-family: 'Poppins', sans-serif;
        }

        .mukta {
            font-family: 'Mukta', sans-serif;
        }

        .urbanist {
            font-family: 'Urbanist', sans-serif;
        }

        .open-sans {
            font-family: 'Open Sans', sans-serif;
        }

        .Axiforma {
            font-family: 'Axiforma', sans-serif !important;
        }

        .Hurme {
            font-family: 'Hurme' !important;
        }

        .Avante {
            font-family: 'Avante' !important;
        }

        body {
            font-family: 'Avante', sans-serif !important;
            font-size: 13px;
            font-weight: 400;
        }

        .btn {
            font-family: 'Poppins', sans-serif !important;
            /* font-size: 13px !important; */
            text-transform: capitalize !important;
        }

        .modal-title {
            font-family: 'Mukta', sans-serif !important;
        }

        div.dataTables_wrapper div.dataTables_length select {
            width: 100px;
        }

        .select2-container--default .select2-selection--single .select2-selection__rendered {
            line-height: 38px;
            width: 100% !important;
            display: block !important;
        }

        .select2-container .select2-selection--single,
        .select2-container--default .select2-selection--single .select2-selection__arrow {
            height: 40px;
            font-size: 0.8rem;
        }

        .select2-container--default .select2-selection--single {
            background-color: #fff;
            border: 1px solid #aaa;
            border-radius: 4px;
        }

        .select2-container {
            display: block !important;
            width: 100% !important;
        }

        a {
            color: var(--bs-black);
        }

        .form-group {
            margin-bottom: 15px;
        }

        .btn {
            padding: 0.6rem 2.14rem;
            font-size: 12px;
        }

        .btn-sm {
            padding: 0.25rem 0.5rem;
            font-size: 0.765625rem;
            border-radius: 3px;
        }

        .bootbox-body {
            font-size: 18px;
        }

        .bootbox .modal-header {
            display: none;
        }

        .form-select {
            padding: .575rem .75rem;
        }

        .dropdown-item {
            font-size: 12px;
            font-weight: 500;
        }

        body {
            font-family: 'Avante' !important;
            font-weight: 500;
        }

        .table>thead>tr>th {
            font-weight: 500 !important;
        }

        .table>tbody>tr>td {
            font-weight: 500;
        }
    </style>

</head>
