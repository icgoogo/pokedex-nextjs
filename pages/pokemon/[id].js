import { blue, green, grey, orange, red } from "@mui/material/colors";
import DetailCharacteristic from "../../components/detail/DetailCharacteristic";
import DetailAbility from "../../components/detail/detail_ability";
import DetailHeader from "../../components/detail/detail_header";
import DetailStats from "../../components/detail/detail_stats";
import detail from "../../styles/detail/Detail.module.css";
import { getRandomInt } from "../../utils/utils";

const Pokemon = ({ pokemonDetail }) => {
  return (
    <div className={detail.container}>
      <DetailHeader id={pokemonDetail.id} />
      <h1 className={detail.title}>{pokemonDetail.name}</h1>

      <DetailAbility types={pokemonDetail.types} />
      <DetailCharacteristic
        height={pokemonDetail.height}
        weight={pokemonDetail.weight}
      />

      <h2 className={detail.statTitle}>Base Stats</h2>

      <DetailStats stats={pokemonDetail.stats} />
    </div>
  );
};

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
  let id = params.id;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  if (!data) {
    return;
    ("Pokemon details not found");
  }

  const pokemonDetail = {
    id: id,
    name: data["name"],
    height: data["height"],
    weight: data["weight"],
    experience: data["base_experience"],
    types: data["types"],
    stats: [
      { type: "hp", value: getRandomInt(0, 300), color: red[500], max: 300 },
      {
        type: "attack",
        value: getRandomInt(0, 300),
        color: orange[500],
        max: 300,
      },
      {
        type: "defense",
        value: getRandomInt(0, 300),
        color: blue[500],
        max: 300,
      },
      {
        type: "speed",
        value: getRandomInt(0, 300),
        color: grey[500],
        max: 300,
      },
      {
        type: "exp",
        value: getRandomInt(0, 1000),
        color: green[500],
        max: 1000,
      },
    ],
  };

  return {
    props: {
      pokemonDetail,
    },
  };
}

export default Pokemon;
