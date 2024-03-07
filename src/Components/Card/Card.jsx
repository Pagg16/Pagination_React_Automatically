import style from "./card.module.css";

export default function Card({ title, url, id }) {
  return (
    <div className={style.card}>
      <div className={style.id}>{id}</div>
      <div className={style.title}>{title}</div>
      <img className={style.img} src={url} alt="test" />
    </div>
  );
}
