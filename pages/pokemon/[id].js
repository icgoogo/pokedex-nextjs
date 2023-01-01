import { grey, red } from "@mui/material/colors";
import { Box } from "@mui/system";
import DetailCharacteristic from "../../components/detail/DetailCharacteristic";
import DetailAbility from "../../components/detail/detail_ability";
import DetailHeader from "../../components/detail/detail_header";
import detail from "../../styles/detail/Detail.module.css";

export default function Pokemon() {
  return (
    <div className={detail.container}>
      <DetailHeader />
      <h1 className={detail.title}>Bulbasaur</h1>

      <DetailAbility />
      <DetailCharacteristic />

      <h2 className={detail.statTitle}>Base Stats</h2>

      <div className={detail.statContainer}>
        <div className={detail.statItem}>
          <p>HP</p>
          <Box
            sx={{
              height: 30,
              backgroundColor: grey[100],
              borderRadius: 15,
            }}
          >
            <Box
              sx={{
                height: 30,
                backgroundColor: red[100],
                borderRadius: 15,
              }}
            ></Box>
          </Box>
        </div>
        <div className={detail.statItem}>
          <p>HP</p>
          <Box
            sx={{
              height: 30,
              backgroundColor: grey[100],
              borderRadius: 15,
            }}
          >
            <Box
              sx={{
                height: 30,
                backgroundColor: red[100],
                borderRadius: 15,
              }}
            ></Box>
          </Box>
        </div>
        <div className={detail.statItem}>
          <p>HP</p>
          <Box
            sx={{
              height: 30,
              backgroundColor: grey[100],
              borderRadius: 15,
            }}
          >
            <Box
              sx={{
                height: 30,
                backgroundColor: red[100],
                borderRadius: 15,
              }}
            ></Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  let paths = [];
  for (let i = 1; i <= 100; i++) {
    paths.push({ params: { id: `${i}` } });
  }
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const pokeData = await res.json();
  return {
    props: {
      pokeData,
    },
  };
}
