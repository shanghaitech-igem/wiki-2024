import LeafMain from "server/home/leaf-main.svg";
import Stem1 from "server/home/stem-1.svg";
import LeafStem from "server/home/leaf-stem.svg";

export const main = {
  Component: LeafMain,
  x: -100,
  y: -100,
  size: 1200,
  rotate: 81.06,
  reverseX: true,
};

export const stems = [
  {
    Component: Stem1,
    x: 150,
    y: 1000,
    size: 1200,
    reverseX: true,
  },
];

export const leaves = [
  {
    Component: LeafStem,
    x: 40,
    y: 1550,
    size: 100,
    rotate: -45,
    reverseX: true,
  },
  {
    Component: LeafStem,
    x: 400,
    y: 1650,
    size: 130,
    rotate: 0,
    reverseX: true,
  },
  {
    Component: LeafStem,
    x: 770,
    y: 2000,
    size: 100,
    rotate: -141.49,
    reverseX: true,
  },
  {
    Component: LeafStem,
    x: 680,
    y: 2170,
    size: 100,
    rotate: 0,
    reverseX: true,
  },
  {
    Component: LeafStem,
    x: 1350,
    y: 2500,
    size: 180,
    rotate: -10.1,
    reverseX: true,
  },
  {
    Component: LeafStem,
    x: 935,
    y: 2550,
    size: 180,
    rotate: 124.44,
    reverseX: true,
  },
];
