
const paleta = document.getElementById('area-paleta');
const gerar = document.getElementById('area-gerar1');

paleta.addEventListener('click', handleColorClick);

function handleColorClick(event) {
  if (event.target.id.startsWith('cor')) {
    const clickedColor = event.target.style.backgroundColor;

    const newColorBox = document.createElement('div');

    newColorBox.classList.add('gerados');
    newColorBox.style.backgroundColor = clickedColor;
    
    gerar.appendChild(newColorBox);

    if (confirm('Deseja adicionar esta cor à sua paleta gerada?')) {
    } else {
      gerar.removeChild(newColorBox);
    }
  }
}


function rgbToHex(rgb) {
  const [r, g, b] = rgb.match(/\d+/g);
  return `#${(+r).toString(16).padStart(2, '0')}${(+g).toString(16).padStart(2, '0')}${(+b).toString(16).padStart(2, '0')}`;
}


document.querySelector('.copia button').addEventListener('click', () => {

  const colors = document.querySelectorAll('.gerados');
  let colorsHex = '';


  colors.forEach(color => {
    const hexColor = rgbToHex(color.style.backgroundColor);
    colorsHex += hexColor + '\n';
  });


  navigator.clipboard.writeText(colorsHex.trim());
  alert('Códigos hexadecimais copiados para a área de transferência!');
});


function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}



