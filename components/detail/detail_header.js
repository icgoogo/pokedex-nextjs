import { Box } from "@mui/material";
import Image from "next/image";
import style from "../../styles/detail/DetailHeader.module.css";
import { getRandomColor } from "../../utils/utils";

const DetailHeader = ({ id }) => {
  let image =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
    id +
    ".png";
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 300,
        backgroundColor: getRandomColor(),
        borderEndEndRadius: 50,
        borderEndStartRadius: 50,
      }}
      className={style.detailBg}
    >
      <Image
        className={style.detailImage}
        width={200}
        height={200}
        src={image}
        alt={image}
      />
    </Box>
  );
};

export default DetailHeader;
