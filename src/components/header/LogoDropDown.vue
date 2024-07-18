<template>
    <header class="container-fluid bg-white">
        <div class="container py-3">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-lg-2 col-md-6 mb-sm-2"><img src="../../assets/logo.png"></div>
                <slot></slot>
                <div class=" col-lg-1 col-md-6 dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        EN
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">EN</a></li>
                        <li><a class="dropdown-item" href="#">ID</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
