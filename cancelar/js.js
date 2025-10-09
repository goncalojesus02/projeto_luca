const paragraph = document.getElementById('topRightParagraph');
const img = document.getElementById('draggableImage');

// Clique no parágrafo
paragraph.addEventListener('click', () => {
    window.location.href = '/gardener.html';
});

// Variáveis do drag
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

img.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - img.offsetLeft;
    offsetY = e.clientY - img.offsetTop;
    img.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        img.style.left = (e.clientX - offsetX) + 'px';
        img.style.top = (e.clientY - offsetY) + 'px';
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        img.style.cursor = 'grab';
    }
});

// Clique na imagem (sem arrastar)
img.addEventListener('click', (e) => {
    if (!isDragging) {
        window.location.href = '/ninasgarden.html';
    }
});


///////////////////////////77
// TESTE 9> INDEX

