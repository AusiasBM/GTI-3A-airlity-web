

   
document.getElementById('menuPrincipal').innerHTML = `
    <div class="container-fluid">
        <a class="navbar-brand p-0" href="index.html">
            <img src="img/logo_airlity_hor.png" width="130" alt="logotipo GTI">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <img src="img/logo_airlity_hor.png" width="130" alt="logotipo GTI">
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="login.html">Inicio de sesión</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
`;
