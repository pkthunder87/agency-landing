import { useState } from "react";
import ModalMenu from "./ModalMenu";

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
        <div className="nav__menu" onClick={handleClick}>
          <img
            className="menu__icon"
            src="./assets/images/icon-hamburger.svg"
            alt="menu icon"
            style={{ filter: menuOpenedStyle }}
          />
          {isMenuOpen && <ModalMenu />}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
