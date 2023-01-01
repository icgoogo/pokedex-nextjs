import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import style from "../../styles/detail/DetailAbility.module.css";

const AbilityBadge = () => {
  return (
    <Box
      className={style.abilityBadge}
      sx={{
        width: 100,
        height: 30,
        backgroundColor: red[200],
        borderRadius: 10,
      }}
    >
      <h4>flying</h4>
    </Box>
  );
};

export default function DetailAbility() {
  return (
    <div className={style.abilityContainer}>
      <AbilityBadge />
      <AbilityBadge />
      <AbilityBadge />
    </div>
  );
}
