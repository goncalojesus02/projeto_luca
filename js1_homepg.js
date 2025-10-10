 // Parágrafo clicável
const topRight = document.getElementById('top-right');
if (topRight) {
  topRight.addEventListener('click', () => {
    window.location.href = '/gardener.html';
  });
}

const textGarden = document.getElementById('text-garden');
if (textGarden) {
  textGarden.addEventListener('click', () => {
    window.location.href = '/index.html';
  });
}


  // Imagem arrastável
  const draggable = document.getElementById('draggable');
  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;
  let dragMoved = false; // Detecta se houve movimento

  draggable.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragMoved = false;
    draggable.classList.add('dragging');
    offsetX = e.clientX - draggable.offsetLeft;
    offsetY = e.clientY - draggable.offsetTop;
    e.preventDefault(); 
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      let x = e.clientX - offsetX;
      let y = e.clientY - offsetY;

      // Detecta que o mouse realmente se moveu
      dragMoved = true;

      // Limitar à viewport
      const maxX = window.innerWidth - draggable.offsetWidth;
      const maxY = window.innerHeight - draggable.offsetHeight;
      x = Math.max(0, Math.min(x, maxX));
      y = Math.max(0, Math.min(y, maxY));

      draggable.style.left = x + 'px';
      draggable.style.top = y + 'px';
      draggable.style.transform = 'none';
    }
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      draggable.classList.remove('dragging');
    }
  });

  // Clique na imagem para redirecionar apenas se não houve movimento
  draggable.addEventListener('click', () => {
    if (!dragMoved) {
      window.location.href = '/projectninasgarden.html';
    }
  });