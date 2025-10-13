const texto1 = document.getElementById("texto1");
const texto2 = document.getElementById("texto2");
const imagem1 = document.getElementById("imagem1");
const coluna3 = document.querySelector(".coluna3");

let imagemVisivel = false;
let isDragging = false;
let offsetX, offsetY;

// cria texto extra dentro da coluna3
const textoExtra = document.createElement("section");
textoExtra.id = "textoExtra";
textoExtra.textContent = 
  "A série Garden apresenta objetos artísticos únicos criados a partir das tatuagens de indivíduos. O presente website é um portfólio interativo que visa democratizar o acesso a esses projetos, almejando traduzir a experiência e especificidade da leitura de cada projeto para uma plataforma digital.\n\n";
coluna3.appendChild(textoExtra);

// --- duplo clique em Nina’s Garden ---
texto1.addEventListener("click", () => {
  if (imagemVisivel) {
    imagemVisivel = false;
    imagem1.classList.remove("visivel");
    textoExtra.classList.remove("visivel");
    return;
  }

  imagemVisivel = true;

  void imagem1.offsetWidth; // força reflow
  imagem1.classList.add("visivel");
  textoExtra.classList.add("visivel");

  requestAnimationFrame(() => centralizarImagem());
});

// --- duplo clique na imagem abre página ---
imagem1.addEventListener("dblclick", (e) => {
  e.stopPropagation();
  window.location.href = "/projectninasgarden.html";
});

// --- clique no Gardener ---
texto2.addEventListener("click", () => {
  window.location.href = "/gardener.html";
});

// --- centralizar imagem ---
function centralizarImagem() {
  if (!imagem1.complete) {
    imagem1.addEventListener("load", centralizarImagem, { once: true });
    return;
  }

  const imgWidth = imagem1.offsetWidth || imagem1.naturalWidth;
  const imgHeight = imagem1.offsetHeight || imagem1.naturalHeight;

  const centerX = (window.innerWidth - imgWidth) / 2;
  const centerY = (window.innerHeight - imgHeight) / 2;

  imagem1.style.left = `${centerX}px`;
  imagem1.style.top = `${centerY}px`;
}

// --- arrastar imagem ---
imagem1.addEventListener("mousedown", (e) => {
  isDragging = true;
  imagem1.style.cursor = "grabbing";
  offsetX = e.clientX - imagem1.offsetLeft;
  offsetY = e.clientY - imagem1.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;
    const maxX = window.innerWidth - imagem1.offsetWidth;
    const maxY = window.innerHeight - imagem1.offsetHeight;
    imagem1.style.left = `${Math.max(0, Math.min(x, maxX))}px`;
    imagem1.style.top = `${Math.max(0, Math.min(y, maxY))}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  imagem1.style.cursor = "grab";
});

// --- recalcula posição em resize ---
window.addEventListener("resize", () => {
  if (!imagemVisivel) return;
  const imgWidth = imagem1.offsetWidth;
  const imgHeight = imagem1.offsetHeight;
  const maxX = window.innerWidth - imgWidth;
  const maxY = window.innerHeight - imgHeight;
  imagem1.style.left = `${Math.min(parseInt(imagem1.style.left, 10) || 0, maxX)}px`;
  imagem1.style.top = `${Math.min(parseInt(imagem1.style.top, 10) || 0, maxY)}px`;
});
