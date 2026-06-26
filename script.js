// Efek Scroll pada Navbar
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Jika di-scroll lebih dari 50px, tambahkan kelas 'scrolled'
        navbar.classList.add('scrolled');
    } else {
        // Jika kembali ke atas, hapus kelas 'scrolled'
        navbar.classList.remove('scrolled');
    }
});