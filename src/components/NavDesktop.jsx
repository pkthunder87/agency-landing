function NavDesktop() {
  return (
    <div className="nav__menu">
      <div className="menu__desk">
        <nav className="desk__nav">
          <ul className="desk__links">
            <li className="desk__link">
              <a href="#">About</a>
            </li>
            <li className="desk__link">
              <a href="#">Services</a>
            </li>
            <li className="desk__link">
              <a href="#">Projects</a>
            </li>
          </ul>
          <button className="desk__button serifs">Contact</button>
        </nav>
      </div>
    </div>
  );
}

export default NavDesktop;
