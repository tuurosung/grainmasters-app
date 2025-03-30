<script src="{{ asset('js/jquery.js') }}"></script>
<script src="{{ asset('js/popper.min.js') }}"></script>
<script src="{{ asset('js/bootbox.js') }}"></script>
<script src="{{ asset('datatables/datatables.js') }}"></script>
<script src="{{ asset('js/bootstrap-datepicker.js') }}"></script>

<script src="{{ asset('js/app.js') }}"></script>
<script src="{{ asset('js/app.min.js') }}"></script>
<script src="{{ asset('js/bootstrap.js') }}"></script>
<script src="{{ asset('js/bootstrap-modal.js') }}"></script>
<script src="{{ asset('js/modules/chart.js') }}"></script>
<script src="{{ asset('js/toastify.min.js') }}"></script>
<script src="{{ asset('js/lity.min.js') }}"></script>
<script src="{{ asset('js/printThis.js') }}"></script>
<script src="{{ asset('js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('js/select2.min.js') }}"></script>
<script src="{{ asset('js/sweetalert.min.js') }}"></script>
<script src="{{ asset('summernote/summernote-bs5.js') }}"></script>

<script src="{{ asset('js/lity.min.js') }}"></script>



<script type="text/javascript">
    $('.datatable').DataTable({
        'sorting': false,
        'paging': false,
        'searching': false,
        'stateSave': false,
        language: {
            search: ""
        },
        responsive: true,
        buttons: [{
            extend: 'print',
            className: 'btn btn-default'
        },
        {
            extend: 'csv',
            className: 'btn btn-default'
        }
        ]
    })

    $('.datatables').DataTable({
        'sorting': false,
        'paging': true,
        'stateSave': false,
        pageLength: 50,
        responsive: true,
        buttons: [{
            extend: 'print',
            className: 'btn btn-default'
        },
        {
            extend: 'csv',
            className: 'btn btn-default'
        }
        ],
        language: {
            search: '',
            searchPlaceholder: "Search..."
        },
    })

    $('#start_date,#end_date').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        todayHighlight: true
    })
</script>


<!-- if session has message -->
@if (Session::has('success'))
<script type="text/javascript">
Toastify({
    text: " {{ Session::get('success') }} ",
    duration: 3000,
    position: 'center',
    // className: "danger",
    style: {
        // background: "#e6180d",
    },
    offset: {
        x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: 90 // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
}).showToast();
</script>
@endif

@if (Session::has('error'))
<script type="text/javascript">
    bootbox.alert("{{ Session::get('error') }}");
Toastify({
    text: "{{ Session::get('error') }}",
    duration: 4000,
    position: 'center',
    // className: "danger",
    style: {
        background: "#e6180d",
    },
    offset: {
        x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: 90 // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
}).showToast();
</script>
@endif
