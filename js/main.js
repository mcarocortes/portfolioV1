!(function (o, c) {
        var n = c.documentElement,
          t = " w-mod-";
        (n.className += t + "js"),
          ("ontouchstart" in o ||
            (o.DocumentTouch && c instanceof DocumentTouch)) &&
            (n.className += t + "touch");
})(window, document);


import { Application } from 'https://unpkg.com/@splinetool/runtime@1.0.31/build/runtime.js';

const canvas = document.getElementById('canvas3d');
const loader = document.getElementById('loader');
const app = new Application(canvas);

const splineURL = 'scene.splinecode';

app.load(splineURL).then(() => {
  loader.style.display = 'none';
}).catch(err => {
  console.error('Error al cargar la escena:', err);
  loader.innerHTML = '<p>Error al cargar la escena</p>';
});

