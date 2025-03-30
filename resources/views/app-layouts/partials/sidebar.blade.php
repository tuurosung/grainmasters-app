<div id="sidebar" class="app-sidebar bg-white">

    <div class="app-sidebar-content ps" data-scrollbar="true" data-height="100%">



        <div class="menu    ">
            <div class="menu-item">
                <a href="{{ route('dashboard') }}" class="menu-link">
                    <span class="menu-icon"><i class="fa fa-laptop"></i></span>
                    <span class="menu-text">Dashboard</span>
                </a>
            </div>

        <div class="menu-item" id="drugs_nav">
            <a href="" class="menu-link">
                <span class="menu-icon"><i class="fas fa-file-alt    "></i> </span>
                <span class="menu-text">Grains List</span>
            </a>
        </div>

            <div class="menu-item" id="pharmacy_nav">
                <a href="" class="menu-link">
                    <span class="menu-icon"><i class="fas fa-chart-simple"></i> </span>
                    <span class="menu-text">Sales History</span>
                </a>
            </div>



            @if (Auth::user()->access_level === 'administrator')
                <div class="menu-item" id="pharmacy_nav">
                    <a href="" class="menu-link">
                        <span class="menu-icon"><i class="fas fa-chart-simple"></i> </span>
                        <span class="menu-text">Expenditure</span>
                    </a>
                </div>

                <div class="menu-item" id="pharmacy_nav">
                    <a href="" class="menu-link">
                        <span class="menu-icon"><i class="fas fa-chart-simple"></i> </span>
                        <span class="menu-text">Expenditure Headers</span>
                    </a>
                </div>

                <div class="menu-item" id="pharmacy_nav">
                    <a href="" class="menu-link">
                        <span class="menu-icon"><i class="fas fa-chart-line"></i> </span>
                        <span class="menu-text">Accounting</span>
                    </a>
                </div>

                <div class="menu-item" id="pharmacy_nav">
                    <a href="" class="menu-link">
                        <span class="menu-icon"><i class="fas fa-users"></i> </span>
                        <span class="menu-text">Users</span>
                    </a>
                </div>

                <div class="menu-item" id="pharmacy_nav">
                    <a href="" class="menu-link">
                        <span class="menu-icon"><i class="fas fa-building-columns"></i> </span>
                        <span class="menu-text">WareHouses</span>
                    </a>
                </div>
            @endif


                <div class="menu-item" id="">
                    <a href="#" class="menu-link">
                        <span class="menu-icon"><i class="fas fa-chart-line"></i> </span>
                        <span class="menu-text">Reports</span>
                    </a>
                </div>

                <div class="menu-item" id="">
                    <a href="" class="menu-link">
                        <span class="menu-icon"><i class="fas fa-calculator"></i> </span>
                        <span class="menu-text">Company Assets</span>
                    </a>
                </div>

                <div class="menu-item" id="pharmacy_nav">
                    <a href="#" class="menu-link">
                        <span class="menu-icon"><i class="fas fa-cog"></i> </span>
                        <span class="menu-text">Configuration</span>
                    </a>
                </div>






            <!-- <div class="menu-item has-sub" id="">
                <a href="#" class="menu-link">
                    <span class="menu-icon"><i class="fa fa-heart"></i></span>
                    <span class="menu-text">UI Kits</span>
                    <span class="menu-caret"><b class="caret"></b></span>
                </a>
                <div class="menu-submenu">

                    <div class="menu-item">
                        <a href="ui_typography.html" class="menu-link">
                            <span class="menu-text">Typography</span>
                        </a>
                    </div>
                    <div class="menu-item" id="">
                        <a href="ui_tabs_accordions.html" class="menu-link">
                            <span class="menu-text">Tabs & Accordions</span>
                        </a>
                    </div>
                </div>
            </div> -->


        </div>

    </div>
</div>
