import ModalMenu from "./ModalMenu";

function NavMobile({ handleClick, menuOpenedStyle, isMenuOpen }) {
  return (
    <div className="nav__menu" onClick={handleClick}>
      <img
        className="menu__icon"
        src="./assets/images/icon-hamburger.svg"
        alt="menu icon"
        style={{ filter: menuOpenedStyle }}
      />
      {isMenuOpen && <ModalMenu />}
    </div>
  );
}

export default NavMobile;
