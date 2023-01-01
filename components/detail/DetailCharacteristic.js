import style from "../../styles/detail/DetailCharacteristic.module.css";
export default function DetailCharacteristic() {
  return (
    <div className={style.characteristicContainer}>
      <div className={style.characteristicBadge}>
        <h2>90.5 KG</h2>
        <p className={style.characteristicProp}>Weight</p>
      </div>
      <div className={style.characteristicBadge}>
        <h2>90.5 KG</h2>
        <p className={style.characteristicProp}>Weight</p>
      </div>
    </div>
  );
}
