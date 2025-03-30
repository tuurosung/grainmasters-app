@include('app-layouts.partials.head')


<body class="pace-done">

    @include('app-layouts.partials.nav')
    @include('app-layouts.partials.sidebar')

    <div id="app" class="app">

        <div id="content" class="app-content">
            <div class="container-fluid">

                <div class="row justify-content-center">
                    <div class="col-xl-12">


                        @yield('content')

                    </div>
                </div>
            </div>
        </div>
    </div>

    @if (Route::has('login'))
        <div class="h-14.5 hidden lg:block"></div>
    @endif
</body>

@include('app-layouts.partials.footer')
@yield('js')
</html>
