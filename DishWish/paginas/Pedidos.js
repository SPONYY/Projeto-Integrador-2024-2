document.querySelector('.scroll-wrapper').addEventListener('wheel', function(e) {
    if (e.deltaY !== 0) {
        // Impede o scroll vertical
        e.preventDefault();
        
        // Aplica o scroll horizontal com base no movimento do mouse
        this.scrollLeft += e.deltaY;
    }
}, { passive: false });
