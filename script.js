// Minimal utility: random RGB string
const randomRGB = () => {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `rgb(${r}, ${g}, ${b})`;
};

(function main(){
  const btn = document.getElementById('colorBtn');
  const log = document.getElementById('log');

  function setRandomBackground(trigger='init') {
    const c = randomRGB();
    document.body.style.backgroundColor = c;
    log.textContent = `Background set to ${c} via ${trigger}.`;
  }

  // Button click → change color
  btn.addEventListener('click', () => setRandomBackground('button'));

  // First mouseenter anywhere on page → change color
  document.addEventListener('mouseenter', () => setRandomBackground('mouseenter'), { once: true });

  // Init message
  log.textContent = 'Loaded script.jss — click the button or move the mouse in.';
})();
