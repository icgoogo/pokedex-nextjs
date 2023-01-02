import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import style from "../../styles/detail/DetailStats.module.css";

const StatItem = ({ stat }) => {
  return (
    <div className={style.statItem}>
      <div className={style.statItemType}>
        <p>{stat.type.toUpperCase()}</p>
      </div>
      <Box
        className={style.statItemBar}
        sx={{
          height: 30,
          backgroundColor: grey[100],
          borderRadius: 15,
        }}
      >
        <Box
          className={style.statItemFillBar}
          sx={{
            height: 30,
            backgroundColor: stat.color,
            borderRadius: 15,
          }}
        >
          <p>
            {stat.value}/{stat.max}
          </p>
        </Box>
      </Box>
    </div>
  );
};

export default function DetailStats({ stats }) {
  return (
    <div className={style.statContainer}>
      {stats.map((stat) => {
        return <StatItem stat={stat} />;
      })}
    </div>
  );
}
