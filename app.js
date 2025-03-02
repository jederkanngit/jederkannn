const sidebar = document.getElementById('sidebar');
const navToggleButton = document.querySelector('nav button');
const sidebarToggleButton = document.querySelector('toggle-btn');

function toggleSidebar() {
    sidebar.classList.toggle('show');
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
}

function toggleSidebarFromButton() {
    sidebar.classList.toggle('show');
    sidebar.classList.toggle('close');
    navToggleButton.classList.toggle('rotate');
}

function toggleSubMenu(button) {
    const subMenu = button.nextElementSibling;
   if (subMenu) { button.nextElementSibling;
      subMenu.classList.toggle('show');
    button.classList.toggle('rotate');
   }
}