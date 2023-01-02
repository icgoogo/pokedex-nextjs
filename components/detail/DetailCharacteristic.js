import style from "../../styles/detail/DetailCharacteristic.module.css";
export default function DetailCharacteristic({ weight, height }) {
  return (
    <div className={style.characteristicContainer}>
      <div className={style.characteristicBadge}>
        <h2>{weight} Kg</h2>
        <p className={style.characteristicProp}>Weight</p>
      </div>
      <div className={style.characteristicBadge}>
        <h2>{height} Cm</h2>
        <p className={style.characteristicProp}>Weight</p>
      </div>
    </div>
  );
}
