import { spline } from "https://cdn.skypack.dev/@georgedoescode/spline@1.0.1";
import SimplexNoise from "https://cdn.skypack.dev/simplex-noise@2.4.0";
import { pointsCirc, pointsRect, pointsHeroDesk, pointsHero2Desk, pointsHeroMob } from "./js/points.js"
import { sectTopStates } from "./js/paths.js"

const pathCirc = document.querySelector(".circ path");
const pathRect = document.querySelector(".rect path");
const pathHeroDesk = document.querySelector(".heroDesk path");
const pathHero2Desk = document.querySelector(".hero2Desk path");
const pathHeroMob = document.querySelector(".heroMob path");

let noiseStep = 0.0015;
const simplex = new SimplexNoise();

function map(n, start1, end1, start2, end2) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

function noise(x, y) {
  return simplex.noise2D(x, y);
}

(function animateCirc() {
  pathCirc.setAttribute("d", spline(pointsCirc, 1.2, true));

  for (let i = 0; i < pointsCirc.length; i++) {
    const point = pointsCirc[i];

    const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
    const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
    const x = map(nX, -1, 1, point.originX - 10, point.originX + 10);
    const y = map(nY, -1, 1, point.originY - 10, point.originY + 10);

    point.x = x;
    point.y = y;

    point.noiseOffsetX += noiseStep;
    point.noiseOffsetY += noiseStep;
  }

  requestAnimationFrame(animateCirc);
})();

(function animateRect() {
  pathRect.setAttribute("d", spline(pointsRect, 1.2, true));

  for (let i = 0; i < pointsRect.length; i++) {
    const point = pointsRect[i];

    const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
    const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
    const x = map(nX, -1, 1, point.originX - 10, point.originX + 10);
    const y = map(nY, -1, 1, point.originY - 10, point.originY + 10);

    point.x = x;
    point.y = y;

    point.noiseOffsetX += noiseStep;
    point.noiseOffsetY += noiseStep;
  }

  requestAnimationFrame(animateRect);
})();

(function animateHeroMob() {
  pathHeroMob.setAttribute("d", spline(pointsHeroMob, 1.2, true));

  for (let i = 0; i < pointsHeroMob.length; i++) {
    const point = pointsHeroMob[i];

    const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
    const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
    const x = map(nX, -1, 1, point.originX - 7, point.originX + 7);
    const y = map(nY, -1, 1, point.originY - 7, point.originY + 7);

    point.x = x;
    point.y = y;

    point.noiseOffsetX += noiseStep;
    point.noiseOffsetY += noiseStep;
  }

  requestAnimationFrame(animateHeroMob);
})();

(function animateHeroDesk() {
  pathHeroDesk.setAttribute("d", spline(pointsHeroDesk, 1.2, true));

  for (let i = 0; i < pointsHeroDesk.length; i++) {
    const point = pointsHeroDesk[i];

    const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
    const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
    const x = map(nX, -1, 1, point.originX - 10, point.originX + 10);
    const y = map(nY, -1, 1, point.originY - 10, point.originY + 10);

    point.x = x;
    point.y = y;

    point.noiseOffsetX += noiseStep;
    point.noiseOffsetY += noiseStep;
  }

  requestAnimationFrame(animateHeroDesk);
})();

(function animateHero2Desk() {
  pathHero2Desk.setAttribute("d", spline(pointsHero2Desk, 1.2, true));

  for (let i = 0; i < pointsHero2Desk.length; i++) {
    const point = pointsHero2Desk[i];

    const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
    const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
    const x = map(nX, -1, 1, point.originX - 10, point.originX + 10);
    const y = map(nY, -1, 1, point.originY - 10, point.originY + 10);

    point.x = x;
    point.y = y;

    point.noiseOffsetX += noiseStep;
    point.noiseOffsetY += noiseStep;
  }

  requestAnimationFrame(animateHero2Desk);
})();

anime({
  targets: ".sectTopLg path",
  d: [
    { value: sectTopStates[1] },
    { value: sectTopStates[2] },
    { value: sectTopStates[3] },
    { value: sectTopStates[0] }
  ],
  easing: "easeInOutSine",
  duration: 5000 * sectTopStates.length,
  loop: true,
  delay: -50
});