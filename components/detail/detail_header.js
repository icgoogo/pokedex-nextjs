import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import Image from "next/image";
import style from "../../styles/detail/DetailHeader.module.css";
export default function DetailHeader() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 300,
        backgroundColor: red[500],
        borderEndEndRadius: 50,
        borderEndStartRadius: 50,
      }}
      className={style.detailBg}
    >
      <Image
        className={style.detailImage}
        width={200}
        height={200}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      />
    </Box>
  );
}
