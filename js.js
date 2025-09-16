    const item1 = document.getElementById("item1");
    const imagem = document.getElementById("imagem");
    const container = document.querySelector(".conteudo-visual");

    let centerX = container.offsetWidth / 2;
    let centerY = container.offsetHeight / 2;

    let posX = centerX;
    let posY = centerY;

    let targetX = centerX;
    let targetY = centerY;

    // Mostrar imagem definitivamente ao clicar no item
    item1.addEventListener("click", () => {
      imagem.style.display = "block";
      posX = centerX;
      posY = centerY;
      imagem.style.left = `${centerX - imagem.width / 2}`;
      imagem.style.top = `${centerY - imagem.height / 2}`;
    });

    // Gravidade simulada com movimento do mouse
    container.addEventListener("mousemove", (e) => {
      if (imagem.style.display !== "block") return; // só funciona se a imagem estiver visível

      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const dx = mouseX - centerX;
      const dy = mouseY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const limite = 150; // distância máxima antes de puxar de volta

      if (dist < limite) {
        targetX = mouseX;
        targetY = mouseY;
      } else {
        targetX = centerX;
        targetY = centerY;
      }
    });

    // Animação suave
    function animate() {
      posX += (targetX - posX) * 0.1;
      posY += (targetY - posY) * 0.1;

      imagem.style.left = `${posX - imagem.width / 2}px`;
      imagem.style.top = `${posY - imagem.height / 2}px`;

      requestAnimationFrame(animate);
    }
    animate();

    // Clique na imagem abre outra página
    imagem.addEventListener("click", () => {
      window.location.href = "/ninaproject.html"; // mude para o link desejado
    });

    // Ajustar centro ao redimensionar
    window.addEventListener("resize", () => {
      centerX = container.offsetWidth / 2;
      centerY = container.offsetHeight / 2;
    });

  
   function zoom(src) {
      const fullscreen = document.createElement('div');
      fullscreen.classList.add('fullscreen');

      const img = document.createElement('img');
      img.src = src;

      fullscreen.appendChild(img);

      fullscreen.addEventListener('click', () => {
        fullscreen.remove();
      });

      document.body.appendChild(fullscreen);
    }

