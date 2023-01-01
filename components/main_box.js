import {
  blue,
  blueGrey,
  green,
  purple,
  red,
  yellow,
} from "@mui/material/colors";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import mainbox from "../styles/MainBox.module.css";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function MainBox({ pokeData }) {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const listColors = [
    red[300],
    blue[300],
    green[300],
    purple[300],
    yellow[300],
    blueGrey[300],
  ];
  return (
    <div>
      <Box
        className={mainbox.mainBox}
        sx={{
          minWidth: 200,
          minHeight: 200,
          backgroundColor: listColors[getRandomInt(0, 5)],
          borderRadius: 4,
          "&:hover": {
            opacity: [0.4],
          },
        }}
      >
        <Image
          priority
          src={pokeData.imgSrc}
          width={80}
          height={80}
          alt={pokeData.pokeName}
        />
        <h2 className={mainbox.headingBox}>{pokeData.pokeName}</h2>
      </Box>
    </div>
  );
}
