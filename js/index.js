tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#1E3E62',
        second: '#FF6500',
        tertiary: '#006BFF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    }
  }
}

const menu = document.getElementById('menu-bar');
const listMenu = document.getElementById('list-menu');
menu.addEventListener('click', function() {
    listMenu.classList.toggle('hidden');
});