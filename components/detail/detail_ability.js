import { Box } from "@mui/material";
import style from "../../styles/detail/DetailAbility.module.css";
import { getRandomColor } from "../../utils/utils";

export default function DetailAbility({ types }) {
  return (
    <div className={style.abilityContainer}>
      {types.map((type) => {
        return <AbilityBadge ability={type.type.name} key={type.slot} />;
      })}
    </div>
  );
}

const AbilityBadge = ({ ability }) => {
  const color = getRandomColor();
  return (
    <Box
      className={style.abilityBadge}
      sx={{
        width: 100,
        height: 30,
        backgroundColor: color,
        borderRadius: 10,
      }}
    >
      <h4>{ability}</h4>
    </Box>
  );
};
