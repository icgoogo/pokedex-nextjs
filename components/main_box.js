import { Box } from "@mui/system";
import Image from "next/image";
import mainbox from "../styles/MainBox.module.css";

export default function MainBox({ pokeData }) {
  return (
    <div>
      <Box
        className={mainbox.mainBox}
        sx={{
          minWidth: 200,
          minHeight: 200,
          backgroundColor: pokeData.bgColor,
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
