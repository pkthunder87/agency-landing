import { useState } from "react";
import ModalMenu from "./ModalMenu";
import NavMobile from "./NavMobile";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpenedStyle = isMenuOpen
    ? "invert(48%) sepia(99%) saturate(651%) hue-rotate(158deg) brightness(801%) contrast(103%)"
    : "";

  function handleClick() {
    setIsMenuOpen((cur) => !cur);
  }

  return (
    <nav className="agency__nav">
      <img
        className="nav__logo"
        src="./assets/images/logo.svg"
        alt="sunnyside logo"
      />

      <div className="nav__right">
        {/* <NavMobile
          handleClick={handleClick}
          menuOpenedStyle={menuOpenedStyle}
          isMenuOpen={isMenuOpen}
        /> */}
        <div className="nav__menu" onClick={handleClick}>
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
      </div>
    </nav>
  );
}

export default NavBar;
