// Rattrapante IX Atelier Interactive Scripts
document.addEventListener('DOMContentLoaded', function() {
    const drawerToggle = document.getElementById('drawer-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');

    if (drawerToggle && mobileDrawer) {
        drawerToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileDrawer.classList.toggle('active');
            const expanded = mobileDrawer.classList.contains('active');
            drawerToggle.setAttribute('aria-expanded', expanded);
            drawerToggle.innerHTML = expanded ? '&times;' : '&#9776;';
        });

        document.addEventListener('click', function(e) {
            if (!mobileDrawer.contains(e.target) && e.target !== drawerToggle) {
                mobileDrawer.classList.remove('active');
                drawerToggle.innerHTML = '&#9776;';
            }
        });
    }
});
