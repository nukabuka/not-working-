window.addEventListener('DOMContentLoaded', () => {
    const header_menu = document.querySelector('.header_menu'),
    menu_item = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        header_menu.classList.toggle('header_menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            header_menu.classList.toggle('.header_menu_active');
        })
    })
})
// .menu_item