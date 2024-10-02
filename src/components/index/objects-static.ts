import { mainLeafRaw, stemRaw, leafStemRaw } from "./svg-raw";

export const main = {
  raw: mainLeafRaw,
  x: -100,
  y: -100,
  size: 1200,
  rotate: 81.06,
  reverseX: true,
};

export const stems = [
  {
    raw: stemRaw,
    x: 1000,
    y: 1150,
    size: 1200,
    reverseX: true,
  },
];

export const leaves = [
  {
    raw: leafStemRaw,
    x: 40,
    y: 1550,
    size: 100,
    rotate: -45,
    reverseX: true,
  }
];
