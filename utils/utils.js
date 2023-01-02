import {
  blue,
  blueGrey,
  green,
  orange,
  purple,
  red,
  yellow,
} from "@mui/material/colors";

export function getRandomColor() {
  const listColors = [
    purple[300],
    orange[300],
    red[300],
    blue[300],
    green[300],
    yellow[300],
    blueGrey[300],
  ];
  return listColors[getRandomInt(0, 6)];
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
