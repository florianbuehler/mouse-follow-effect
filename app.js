const img = document.getElementById('rick-and-morty');
const rect = img.getBoundingClientRect();

// Morty
const anchorMortyLeftEyeX = rect.left + 86;
const anchorMortyLeftEyeY = rect.top + 198;

const anchorMortyRightEyeX = rect.left + 128;
const anchorMortyRightEyeY = rect.top + 191;

const mortyLeftEye = document.getElementById('morty-left-eye')
const mortyRightEye = document.getElementById('morty-right-eye')

// Rick
const anchorRickLeftEyeX = rect.left + 182;
const anchorRickLeftEyeY = rect.top + 105;

const anchorRickRightEyeX = rect.left + 223;
const anchorRickRightEyeY = rect.top + 103;

const rickLeftEye = document.getElementById('rick-left-eye')
const rickRightEye = document.getElementById('rick-right-eye')

document.addEventListener('mousemove', (evt) => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  const angleMortyLeftEye = getAngle(mouseX, mouseY, anchorMortyLeftEyeX, anchorMortyLeftEyeY);
  const angleMortyRightEye = getAngle(mouseX, mouseY, anchorMortyRightEyeX, anchorMortyRightEyeY);

  const angleRickLeftEye = getAngle(mouseX, mouseY, anchorRickLeftEyeX, anchorRickLeftEyeY);
  const angleRickRightEye = getAngle(mouseX, mouseY, anchorRickRightEyeX, anchorRickRightEyeY);

  mortyLeftEye.style.transform = `rotate(${180 + angleMortyLeftEye}deg) translateX(10px)`
  mortyRightEye.style.transform = `rotate(${180 + angleMortyRightEye}deg) translateX(10px)`

  rickLeftEye.style.transform = `rotate(${180 + angleRickLeftEye}deg) translateX(10px)`
  rickRightEye.style.transform = `rotate(${180 + angleRickRightEye}deg) translateX(10px)`
})

function getAngle(cx, cy, ex, ey) {
  const dx = ex - cx;
  const dy = ey - cy;

  const rad = Math.atan2(dy, dx); // range (-PI, PI]
  return rad * 180 / Math.PI;
}