<div class="sidebar" data-background-color="white" data-active-color="danger">

    <!--
    Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black"
    Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
    -->

    <div class="sidebar-wrapper">
        <div class="logo">
            <a href="http://www.creative-tim.com" class="simple-text">
                Creative Tim
            </a>
        </div>

        <ul class="nav">
            <li class="{{ (\Request::route()->getName() == 'admin.dashboard') ? 'active' : '' }}">
                <a href="{{route('admin.dashboard')}}">
                    <i class="ti-panel"></i>
                    <p>Dashboard</p>
                </a>
            </li>
            <li class="{{ (\Request::route()->getName() == 'admin.users') ? 'active' : '' }}">
                <a href="{{ route('admin.users') }}">
                    <i class="ti-user"></i>
                    <p>Users</p>
                </a>
            </li>
            <li class="{{ (\Request::route()->getName() == 'admin.jobs') ? 'active' : '' }}">
                <a href="{{ route('admin.jobs') }}">
                    <i class="ti-bell"></i>
                    <p>Job Requests</p>
                </a>
            </li>
            <li class="{{ (\Request::route()->getName() == 'admin.jobs.price') ? 'active' : '' }}">
                <a href="{{ route('admin.jobs.price') }}">
                    <i class="ti-money"></i>
                    <p>Service Settings</p>
                </a>
            </li>
            <li class="{{ (\Request::route()->getName() == 'admin.jobs.duration') ? 'active' : '' }}">
                <a href="{{ route('admin.jobs.duration') }}">
                    <i class="ti-time"></i>
                    <p>Time Group Set</p>
                </a>
            </li>
            <li class="{{ (\Request::route()->getName() == 'admin.jobs.format') ? 'active' : '' }}">
                <a href="{{ route('admin.jobs.format') }}">
                    <i class="ti-file"></i>
                    <p>File Format Group Set</p>
                </a>
            </li>
        </ul>
    </div>
</div>