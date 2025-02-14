function Concept({ num, imgBG, title, text }) {
  return (
    <div
      className={`agency__concept concept--${num}`}
      style={{ backgroundImage: imgBG }}
    >
      <h2 className={`concept__title concept__title--${num} serifs`}>
        {title}
      </h2>
      <p className={`concept__text concept__text--${num}`}>{text}</p>
    </div>
  );
}

export default Concept;
