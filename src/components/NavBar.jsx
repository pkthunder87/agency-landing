import { useState } from "react";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

function NavBar({ isMobile }) {
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
        {isMobile ? (
          <NavMobile
            handleClick={handleClick}
            menuOpenedStyle={menuOpenedStyle}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        ) : (
          <NavDesktop />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
