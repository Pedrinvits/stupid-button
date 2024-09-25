"use client"
import React, { useEffect } from 'react';

const Donut = () => {
  useEffect(() => {
    let A = 1, B = 1;
    const donutElement = document.getElementById("donut");

    const renderFrame = () => {
      const b = [];
      const z = [];
      const resolution = 1760;
      A += 0.07;
      B += 0.03;

      for (let k = 0; k < resolution; k++) {
        b[k] = k % 80 === 79 ? "\n" : " ";
        z[k] = 0;
      }

      for (let j = 0; j < 6.28; j += 0.07) {
        for (let i = 0; i < 6.28; i += 0.02) {
          const c = Math.sin(i),
                d = Math.cos(j),
                e = Math.sin(A),
                f = Math.sin(j),
                g = Math.cos(A),
                h = d + 2,
                D = 1 / (c * h * e + f * g + 5),
                l = Math.cos(i),
                m = Math.cos(B),
                n = Math.sin(B),
                t = c * h * g - f * e;
          const x = Math.floor(40 + 30 * D * (l * h * m - t * n));
          const y = Math.floor(12 + 15 * D * (l * h * n + t * m));
          const o = x + 80 * y;
          const N = Math.floor(8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));
          
          if (y < 22 && y >= 0 && x >= 0 && x < 80 && D > z[o]) {
            z[o] = D;
            b[o] = ".,-~:;=!*#$@"[Math.max(N, 0)];
          }
        }
      }

      if (donutElement) {
        donutElement.textContent = b.join("");
      }
    };

    const intervalId = setInterval(renderFrame, 50);

    return () => clearInterval(intervalId);
  }, []);

  return <pre id="donut" style={{ fontSize: '12px', lineHeight: '1.2' }}></pre>;
};

export default Donut;
