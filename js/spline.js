import { Application } from 'https://unpkg.com/@splinetool/runtime@1.0.31/build/runtime.js';

const canvas = document.getElementById('canvas');
const app = new Application(canvas);

const splineURL = 'scene.splinecode';

app.load(splineURL).then(() => {
}).catch(err => {
  console.error('Error al cargar la escena:', err);
  loader.innerHTML = '<p>Error al cargar la escena</p>';
});