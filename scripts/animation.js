import gsap from "gsap";

let tl = gsap.timeline();

function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

export function logoAnimation(id, x, y, logoPos) {
  //center relative to the logo postion
  const centerVW = innerWidth / 2 - logoPos.x - 40;
  const centerVH = innerHeight / 2 - logoPos.y - 40;
  const xRam = generateRandomInteger(-20, 20);
  const yRam = generateRandomInteger(-20, 20);
  const zRam = generateRandomInteger(-3, 3);

  tl.fromTo(
    `.${id}`,
    { opacity: 0, x: x, y: y, scale: 0.25 },
    {
      opacity: 1,
      x: centerVW,
      y: centerVH,
      scale: 6,
      ease: Back.easeOut.config(1.7),
      duration: 1.5,
      rotateX: xRam,
      rotateY: yRam,
      rotateZ: zRam
    }
  ).to(`.${id}`, {
    x: 0,
    y: 0,
    scale: 1,
    rotateX: 720,
    rotateY: 720,
    rotateZ: 720,
    ease: Power4.easeIn,
  });
  //   .to(
  //     `.${id}`,{

  //         rotateX: 1,
  //         rotateY: 0,
  //         rotateZ: 0}
  //   )
}
