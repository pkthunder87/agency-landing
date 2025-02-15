function Testimony({ name, imgPro, text, job }) {
  return (
    <li className="test">
      <div className="test__img">
        <img src={imgPro} alt={`${name}'s profile pic`} />
      </div>
      <p className="test__text">{text}</p>
      <p className="test__name serifs">{name}</p>
      <p className="test__job">{job}</p>
    </li>
  );
}

export default Testimony;
