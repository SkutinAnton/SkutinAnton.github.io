function show() {
    
    function showLogo() {
        let logo = document.querySelector('.logo_hide');
        logo.classList.remove('logo_hide');
    }
    
    function showName() {
        let logo = document.querySelector('.header__name_hide');
        logo.classList.remove('header__name_hide');
    }

    function showProfession() {
        let logo = document.querySelector('.header__profession_hide');
        logo.classList.remove('header__profession_hide');
    }

    setTimeout(showLogo, 300);
    setTimeout(showName, 1400);
    setTimeout(showProfession, 2000);
}

show();