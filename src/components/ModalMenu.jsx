function ModalMenu() {
  return (
    <div className="menu__modal">
      <nav className="menu__nav">
        <ul className="menu__links">
          <li className="menu__link">
            <a href="#">About</a>
          </li>
          <li className="menu__link">
            <a href="#">Services</a>
          </li>
          <li className="menu__link">
            <a href="#">Projects</a>
          </li>
        </ul>
        <button className="menu__button serifs">Contact</button>
      </nav>
    </div>
  );
}

export default ModalMenu;
