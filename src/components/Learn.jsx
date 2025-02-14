function Learn({ num, img, imgAlt, title, text }) {
  return (
    <div className={`agency__learn learn--${num}`}>
      <div className="learn__top">
        <img src={`${img}`} alt={`${imgAlt}`} />
      </div>

      <div className="learn__bot">
        <h2 className="learn__title serifs">{title}</h2>
        <p className="learn__text">{text}</p>
        <p className={`learn__more highlight  serifs highlight--${num}`}>
          {/* <mark className={`learn__mark mark--${num}`}>Learn More</mark> */}
          learn more
        </p>
      </div>
    </div>
  );
}

export default Learn;
